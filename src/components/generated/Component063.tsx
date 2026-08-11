type Variant = 'primary' | 'secondary'

export interface Component063Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component063({ label, variant = 'primary', onClick }: Component063Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
