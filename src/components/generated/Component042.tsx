type Variant = 'primary' | 'secondary'

export interface Component042Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component042({ label, variant = 'primary', onClick }: Component042Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
