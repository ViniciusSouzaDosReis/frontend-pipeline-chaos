import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // Safety net for `--changed` (used on PRs, see ci.yml): the import-graph
    // walk that powers `--changed` only sees static JS/TS imports. Changes
    // to these files can affect every test without any test importing them,
    // so any match here forces the full suite to run instead of a filtered
    // subset — confirmed necessary by testing: Vitest's own default
    // forceRerunTriggers did NOT catch a root-level vite.config.ts change.
    forceRerunTriggers: [
      '**/vite.config.*',
      '**/package.json',
      '**/package-lock.json',
      '**/scripts/generate.ts',
      '**/.github/workflows/**',
    ],
    projects: [
      {
        extends: true,
        test: {
          name: 'components',
          include: ['src/**/*.test.tsx'],
          exclude: ['src/components/notifications/**'],
          pool: 'threads',
          isolate: false,
        },
      },
      {
        extends: true,
        test: {
          name: 'notifications',
          include: ['src/components/notifications/**/*.test.tsx'],
          pool: 'forks',
          isolate: true,
        },
      },
    ],
  },
})
