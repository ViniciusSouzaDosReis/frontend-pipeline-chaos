type Variant = 'primary' | 'secondary'

export interface Component081Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component081({ label, variant = 'primary', onClick }: Component081Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
