type Variant = 'primary' | 'secondary'

export interface Component033Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component033({ label, variant = 'primary', onClick }: Component033Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
