import { getNotifications } from '../../lib/notificationQueue'

export function NotificationCounter() {
  const count = getNotifications().length
  return <span aria-label="notification-count">{count}</span>
}
