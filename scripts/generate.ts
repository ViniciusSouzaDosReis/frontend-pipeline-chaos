import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// ---- Configuration ----
// Tune these to hit the ~5-8min baseline pipeline time documented in the
// README. Re-run `npm run generate` after changing them — it's idempotent,
// existing files with unchanged content are simply overwritten in place.
const COMPONENT_COUNT = 120
const TESTS_PER_COMPONENT = 3
const ARTIFICIAL_DELAY_MS = 500

const OUTPUT_DIR = join(process.cwd(), 'src', 'components', 'generated')

type Kind = 'button' | 'card' | 'badge'
const KINDS: Kind[] = ['button', 'card', 'badge']

function pad(n: number): string {
  return String(n).padStart(3, '0')
}

function kindFor(index: number): Kind {
  return KINDS[index % KINDS.length]
}

function componentSource(name: string, kind: Kind): string {
  const lines: string[] = []

  if (kind === 'button') {
    lines.push(
      "type Variant = 'primary' | 'secondary'",
      '',
      `export interface ${name}Props {`,
      '  label: string',
      '  variant?: Variant',
      '  onClick?: () => void',
      '}',
      '',
      `export function ${name}({ label, variant = 'primary', onClick }: ${name}Props) {`,
      '  return (',
      '    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>',
      '      {label}',
      '    </button>',
      '  )',
      '}',
      '',
    )
  } else if (kind === 'card') {
    lines.push(
      `export interface ${name}Props {`,
      '  title: string',
      '  description: string',
      '}',
      '',
      `export function ${name}({ title, description }: ${name}Props) {`,
      '  return (',
      '    <div className="ds-card">',
      '      <h3 className="ds-card__title">{title}</h3>',
      '      <p className="ds-card__description">{description}</p>',
      '    </div>',
      '  )',
      '}',
      '',
    )
  } else {
    lines.push(
      "type Tone = 'neutral' | 'success' | 'danger'",
      '',
      `export interface ${name}Props {`,
      '  text: string',
      '  tone?: Tone',
      '}',
      '',
      `export function ${name}({ text, tone = 'neutral' }: ${name}Props) {`,
      '  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>',
      '}',
      '',
    )
  }

  return lines.join('\n')
}

const SAMPLE_PROPS: Record<Kind, string> = {
  button: 'label="Click me"',
  card: 'title="Title" description="Description"',
  badge: 'text="New"',
}

const SAMPLE_TEXT: Record<Kind, string> = {
  button: 'Click me',
  card: 'Title',
  badge: 'New',
}

function testSource(name: string, kind: Kind, testCount: number): string {
  const lines: string[] = [
    "import { describe, it, expect } from 'vitest'",
    "import { render, screen } from '@testing-library/react'",
    `import { ${name} } from './${name}'`,
    '',
    '// Artificial delay simulates a heavy setup step (e.g. fetching theme/config',
    '// tokens from a design system service) — deliberately part of the "chaotic"',
    '// baseline pipeline this repo exists to document.',
    'async function simulateHeavySetup() {',
    `  await new Promise((resolve) => setTimeout(resolve, ${ARTIFICIAL_DELAY_MS}))`,
    '}',
    '',
    `describe('${name}', () => {`,
  ]

  for (let i = 1; i <= testCount; i++) {
    lines.push(
      `  it('renders variant ${i}', async () => {`,
      '    await simulateHeavySetup()',
      `    render(<${name} ${SAMPLE_PROPS[kind]} />)`,
      `    expect(screen.getByText('${SAMPLE_TEXT[kind]}')).toBeInTheDocument()`,
      '  })',
      '',
    )
  }

  lines.push('})', '')

  return lines.join('\n')
}

function main() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  for (let i = 1; i <= COMPONENT_COUNT; i++) {
    const name = `Component${pad(i)}`
    const kind = kindFor(i)

    writeFileSync(join(OUTPUT_DIR, `${name}.tsx`), componentSource(name, kind))
    writeFileSync(join(OUTPUT_DIR, `${name}.test.tsx`), testSource(name, kind, TESTS_PER_COMPONENT))
  }

  console.log(
    `Generated ${COMPONENT_COUNT} components (${COMPONENT_COUNT * TESTS_PER_COMPONENT} tests) in ${OUTPUT_DIR}`,
  )
}

main()
