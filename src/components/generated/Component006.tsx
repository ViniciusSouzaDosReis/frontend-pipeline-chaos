type Variant = 'primary' | 'secondary'

export interface Component006Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component006({ label, variant = 'primary', onClick }: Component006Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
