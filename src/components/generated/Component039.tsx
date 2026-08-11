type Variant = 'primary' | 'secondary'

export interface Component039Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component039({ label, variant = 'primary', onClick }: Component039Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
