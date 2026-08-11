type Variant = 'primary' | 'secondary'

export interface Component093Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component093({ label, variant = 'primary', onClick }: Component093Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
