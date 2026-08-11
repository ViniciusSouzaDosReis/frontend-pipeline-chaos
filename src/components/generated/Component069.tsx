type Variant = 'primary' | 'secondary'

export interface Component069Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component069({ label, variant = 'primary', onClick }: Component069Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
