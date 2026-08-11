type Tone = 'neutral' | 'success' | 'danger'

export interface Component092Props {
  text: string
  tone?: Tone
}

export function Component092({ text, tone = 'neutral' }: Component092Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
