type Variant = 'primary' | 'secondary'

export interface Component021Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component021({ label, variant = 'primary', onClick }: Component021Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
