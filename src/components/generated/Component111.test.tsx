import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Component111 } from './Component111'

// Artificial delay simulates a heavy setup step (e.g. fetching theme/config
// tokens from a design system service) — deliberately part of the "chaotic"
// baseline pipeline this repo exists to document.
async function simulateHeavySetup() {
  await new Promise((resolve) => setTimeout(resolve, 400))
}

describe('Component111', () => {
  it('renders variant 1', async () => {
    await simulateHeavySetup()
    render(<Component111 label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders variant 2', async () => {
    await simulateHeavySetup()
    render(<Component111 label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders variant 3', async () => {
    await simulateHeavySetup()
    render(<Component111 label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

})
