type Variant = 'primary' | 'secondary'

export interface Component075Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component075({ label, variant = 'primary', onClick }: Component075Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
