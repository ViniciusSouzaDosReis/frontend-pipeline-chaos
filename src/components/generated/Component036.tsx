type Variant = 'primary' | 'secondary'

export interface Component036Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component036({ label, variant = 'primary', onClick }: Component036Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
