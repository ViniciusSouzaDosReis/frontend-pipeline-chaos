type Variant = 'primary' | 'secondary'

export interface Component096Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component096({ label, variant = 'primary', onClick }: Component096Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
