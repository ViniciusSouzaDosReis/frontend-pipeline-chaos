import { pushNotification } from '../../lib/notificationQueue'

export interface NotificationToastProps {
  message: string
}

export function NotificationToast({ message }: NotificationToastProps) {
  pushNotification(message)
  return <div role="alert">{message}</div>
}
