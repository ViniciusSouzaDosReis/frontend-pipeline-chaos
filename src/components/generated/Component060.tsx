type Variant = 'primary' | 'secondary'

export interface Component060Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component060({ label, variant = 'primary', onClick }: Component060Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
