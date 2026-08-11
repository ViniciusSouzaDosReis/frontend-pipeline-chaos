type Variant = 'primary' | 'secondary'

export interface Component105Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component105({ label, variant = 'primary', onClick }: Component105Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
