type Variant = 'primary' | 'secondary'

export interface Component009Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component009({ label, variant = 'primary', onClick }: Component009Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
