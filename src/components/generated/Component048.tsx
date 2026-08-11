type Variant = 'primary' | 'secondary'

export interface Component048Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component048({ label, variant = 'primary', onClick }: Component048Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
