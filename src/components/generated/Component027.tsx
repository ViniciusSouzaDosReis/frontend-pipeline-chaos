type Variant = 'primary' | 'secondary'

export interface Component027Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component027({ label, variant = 'primary', onClick }: Component027Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
