import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NotificationToast } from './NotificationToast'
import { clearNotifications, getNotifications } from '../../lib/notificationQueue'

beforeEach(() => {
  clearNotifications()
})

describe('NotificationToast', () => {
  it('registers exactly one notification in the shared queue', () => {
    render(<NotificationToast message="Upload failed" />)
    expect(getNotifications()).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent('Upload failed')
  })
})
