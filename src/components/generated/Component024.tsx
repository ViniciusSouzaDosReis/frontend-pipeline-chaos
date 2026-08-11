type Variant = 'primary' | 'secondary'

export interface Component024Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component024({ label, variant = 'primary', onClick }: Component024Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
