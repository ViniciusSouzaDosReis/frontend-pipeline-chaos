type Variant = 'primary' | 'secondary'

export interface Component111Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component111({ label, variant = 'primary', onClick }: Component111Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
