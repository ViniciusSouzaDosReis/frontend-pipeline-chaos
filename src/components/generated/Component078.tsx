type Variant = 'primary' | 'secondary'

export interface Component078Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component078({ label, variant = 'primary', onClick }: Component078Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
