import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NotificationBanner } from './NotificationBanner'
import { clearNotifications, getNotifications } from '../../lib/notificationQueue'

// Runs in the 'notifications' project (pool: 'forks', isolated) — this
// component pushes into the shared queue singleton, so it needs a fresh
// module registry per file to be trustworthy.
beforeEach(() => {
  clearNotifications()
})

describe('NotificationBanner', () => {
  it('registers exactly one notification in the shared queue', () => {
    render(<NotificationBanner message="Saved" />)
    expect(getNotifications()).toHaveLength(1)
    expect(screen.getByRole('status')).toHaveTextContent('Saved')
  })
})
