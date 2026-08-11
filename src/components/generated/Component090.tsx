type Variant = 'primary' | 'secondary'

export interface Component090Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component090({ label, variant = 'primary', onClick }: Component090Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
