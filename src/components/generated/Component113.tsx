type Tone = 'neutral' | 'success' | 'danger'

export interface Component113Props {
  text: string
  tone?: Tone
}

export function Component113({ text, tone = 'neutral' }: Component113Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
