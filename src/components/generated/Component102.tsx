type Variant = 'primary' | 'secondary'

export interface Component102Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component102({ label, variant = 'primary', onClick }: Component102Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
