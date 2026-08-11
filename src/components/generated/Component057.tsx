type Variant = 'primary' | 'secondary'

export interface Component057Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component057({ label, variant = 'primary', onClick }: Component057Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
