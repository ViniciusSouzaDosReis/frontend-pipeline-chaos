type Variant = 'primary' | 'secondary'

export interface Component012Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component012({ label, variant = 'primary', onClick }: Component012Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
