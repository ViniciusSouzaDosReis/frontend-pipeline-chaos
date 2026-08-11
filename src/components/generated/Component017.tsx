type Tone = 'neutral' | 'success' | 'danger'

export interface Component017Props {
  text: string
  tone?: Tone
}

export function Component017({ text, tone = 'neutral' }: Component017Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
