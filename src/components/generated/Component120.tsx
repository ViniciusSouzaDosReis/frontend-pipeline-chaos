type Variant = 'primary' | 'secondary'

export interface Component120Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component120({ label, variant = 'primary', onClick }: Component120Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
