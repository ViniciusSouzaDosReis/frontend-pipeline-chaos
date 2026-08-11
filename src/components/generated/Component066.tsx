type Variant = 'primary' | 'secondary'

export interface Component066Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component066({ label, variant = 'primary', onClick }: Component066Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
