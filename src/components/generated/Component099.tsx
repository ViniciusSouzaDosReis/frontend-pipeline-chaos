type Variant = 'primary' | 'secondary'

export interface Component099Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component099({ label, variant = 'primary', onClick }: Component099Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
