type Tone = 'neutral' | 'success' | 'danger'

export interface Component104Props {
  text: string
  tone?: Tone
}

export function Component104({ text, tone = 'neutral' }: Component104Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
