type Variant = 'primary' | 'secondary'

export interface Component087Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component087({ label, variant = 'primary', onClick }: Component087Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
