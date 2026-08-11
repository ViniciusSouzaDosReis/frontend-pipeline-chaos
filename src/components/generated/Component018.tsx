type Variant = 'primary' | 'secondary'

export interface Component018Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component018({ label, variant = 'primary', onClick }: Component018Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
