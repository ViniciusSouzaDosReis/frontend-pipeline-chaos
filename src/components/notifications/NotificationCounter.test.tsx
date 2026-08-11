import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NotificationCounter } from './NotificationCounter'
import { clearNotifications, pushNotification } from '../../lib/notificationQueue'

// This test depends entirely on the shared queue's state at render time —
// the strongest case for isolation in this family. Without a clean module
// registry per file, whatever another file left in the queue would change
// this count.
beforeEach(() => {
  clearNotifications()
})

describe('NotificationCounter', () => {
  it('reflects the current size of the shared queue', () => {
    pushNotification('one')
    pushNotification('two')
    render(<NotificationCounter />)
    expect(screen.getByLabelText('notification-count')).toHaveTextContent('2')
  })
})
