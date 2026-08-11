type Variant = 'primary' | 'secondary'

export interface Component072Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component072({ label, variant = 'primary', onClick }: Component072Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
