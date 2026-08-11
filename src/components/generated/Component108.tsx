type Variant = 'primary' | 'secondary'

export interface Component108Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component108({ label, variant = 'primary', onClick }: Component108Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
