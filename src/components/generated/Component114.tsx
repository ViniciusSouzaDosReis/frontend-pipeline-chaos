type Variant = 'primary' | 'secondary'

export interface Component114Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component114({ label, variant = 'primary', onClick }: Component114Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
