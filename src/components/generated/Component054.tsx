type Variant = 'primary' | 'secondary'

export interface Component054Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component054({ label, variant = 'primary', onClick }: Component054Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
