import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // Deliberately disabled: this is the "chaotic" baseline's single-thread
    // anti-pattern. Re-enabling this is one of the optimizations applied
    // AFTER this repo's baseline is measured, not part of this plan.
    fileParallelism: false,
  },
})
