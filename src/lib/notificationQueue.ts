// Shared, module-level singleton — simulates a real Design System pattern
// (a global toast/notification manager multiple components push into and
// read from). This mutable shared state is exactly why the components in
// `src/components/notifications/` need process isolation in tests: if two
// test files shared this module's registry (`isolate: false`), one file's
// pushes/clears could leak into another file's assertions. It's the
// opposite of `src/components/generated/`, where every component is pure
// and stateless, and sharing the module registry between files is safe.
export interface Notification {
  id: number
  message: string
}

let queue: Notification[] = []
let nextId = 1

export function pushNotification(message: string): Notification {
  const notification: Notification = { id: nextId++, message }
  queue.push(notification)
  return notification
}

export function getNotifications(): Notification[] {
  return queue
}

export function clearNotifications(): void {
  queue = []
  nextId = 1
}
