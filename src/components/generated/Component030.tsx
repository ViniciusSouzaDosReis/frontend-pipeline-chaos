type Variant = 'primary' | 'secondary'

export interface Component030Props {
  label: string
  variant?: Variant
  onClick?: () => void
}

export function Component030({ label, variant = 'primary', onClick }: Component030Props) {
  return (
    <button className={`ds-button ds-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
