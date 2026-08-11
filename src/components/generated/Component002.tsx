type Tone = 'neutral' | 'success' | 'danger'

export interface Component002Props {
  text: string
  tone?: Tone
}

export function Component002({ text, tone = 'neutral' }: Component002Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
