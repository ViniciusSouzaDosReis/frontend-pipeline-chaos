import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Component090 } from './Component090'

// Artificial delay simulates a heavy setup step (e.g. fetching theme/config
// tokens from a design system service) — deliberately part of the "chaotic"
// baseline pipeline this repo exists to document.
async function simulateHeavySetup() {
  await new Promise((resolve) => setTimeout(resolve, 500))
}

describe('Component090', () => {
  it('renders variant 1', async () => {
    await simulateHeavySetup()
    render(<Component090 label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders variant 2', async () => {
    await simulateHeavySetup()
    render(<Component090 label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders variant 3', async () => {
    await simulateHeavySetup()
    render(<Component090 label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

})
