type Variant = 'primary' | 'secondary'

export interface Component015Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component015({ label, variant = 'primary', onClick }: Component015Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
