type Variant = 'primary' | 'secondary'

export interface Component045Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component045({ label, variant = 'primary', onClick }: Component045Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
