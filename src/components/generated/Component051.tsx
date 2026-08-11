type Variant = 'primary' | 'secondary'

export interface Component051Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component051({ label, variant = 'primary', onClick }: Component051Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
