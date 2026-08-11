# Frontend Pipeline Chaos

POC pública para estudar, na prática, como reduzir o tempo de um pipeline de testes front-end sem perder qualidade.

## Contexto

Este repositório não é um produto. É um cenário **deliberadamente lento e mal configurado**, construído para servir de baseline mensurável: primeiro documentamos o "antes" com números reais do GitHub Actions, depois aplicamos otimizações (paralelização/sharding, cache, testes afetados por diff) e comparamos o "depois" — também com números reais.

Stack: Vite + React + TypeScript + Vitest + React Testing Library. Os componentes em `src/components/generated/` são sintéticos, gerados por `scripts/generate.ts`, no estilo de uma pequena biblioteca de Design System (botão/card/badge).

## 📊 Baseline

> Medido no run real do pipeline em `main` — [ver run no Actions](https://github.com/ViniciusSouzaDosReis/frontend-pipeline-chaos/actions/runs/31495617149).

| Etapa | Tempo |
|---|---|
| Total do pipeline | 5min 09s (medido em 2026-08-11) |
| `npm ci` | 4s |
| `npm run test` (360 testes gerados + 1 sanity) | 4min 47s |

Detalhe: lint (0s) + typecheck (2s) + build (3s) somam pouco — praticamente todo o tempo do pipeline está concentrado na suíte de testes rodando single-thread com delay artificial.

## 🔥 Problemas conhecidos (roteiro de otimização)

- [ ] **Sem cache de dependências** (`node_modules`/npm) — `setup-node` roda sem `cache: 'npm'`, então `npm ci` baixa tudo do zero a cada run.
- [ ] **Sem cache de build** — o Vite não reaproveita nada entre runs.
- [ ] **Pipeline totalmente sequencial** — lint → typecheck → build → test rodam um atrás do outro no mesmo job, quando várias dessas etapas são independentes entre si.
- [ ] **Testes forçados a rodar single-thread** — `fileParallelism: false` em `vite.config.ts` desliga o paralelismo nativo do Vitest de propósito.
- [ ] **Sem sharding** — a suíte inteira roda num único job, em vez de dividida entre múltiplos jobs em paralelo.
- [ ] **Suíte inteira roda sempre** — mesmo mudando 1 componente, os ~360 testes rodam todos, sem seleção por diff.

## Como rodar localmente

```bash
npm install
npm run generate   # gera os componentes + testes sintéticos
npm run test        # roda a suíte (lenta de propósito)
npm run lint
npm run typecheck
npm run build
```

## Como recalibrar o tempo do baseline

O alvo é o pipeline "antes" levar entre 5 e 8 minutos no GitHub Actions. Se o primeiro run real ficar muito fora dessa faixa:

1. Ajuste `COMPONENT_COUNT`, `TESTS_PER_COMPONENT` ou `ARTIFICIAL_DELAY_MS` no topo de `scripts/generate.ts`.
2. Rode `npm run generate` de novo (é idempotente — regenera os arquivos, sem duplicar).
3. Rode `npm run test` localmente pra ter uma ideia do tempo antes de commitar.
4. Commit e push — o pipeline dispara de novo em `main`.
