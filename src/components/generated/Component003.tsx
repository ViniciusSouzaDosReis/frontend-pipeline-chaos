type Variant = 'primary' | 'secondary'

export interface Component003Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component003({ label, variant = 'primary', onClick }: Component003Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
