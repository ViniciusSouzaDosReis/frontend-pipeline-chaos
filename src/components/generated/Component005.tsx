type Tone = 'neutral' | 'success' | 'danger'

export interface Component005Props {
  text: string
  tone?: Tone
}

export function Component005({ text, tone = 'neutral' }: Component005Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
