import { pushNotification } from '../../lib/notificationQueue'

export interface NotificationBannerProps {
  message: string
}

export function NotificationBanner({ message }: NotificationBannerProps) {
  pushNotification(message)
  return <div role="status">{message}</div>
}
