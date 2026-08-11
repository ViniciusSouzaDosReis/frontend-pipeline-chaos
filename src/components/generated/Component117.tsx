type Variant = 'primary' | 'secondary'

export interface Component117Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component117({ label, variant = 'primary', onClick }: Component117Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
