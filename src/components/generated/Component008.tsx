type Tone = 'neutral' | 'success' | 'danger'

export interface Component008Props {
  text: string
  tone?: Tone
}

export function Component008({ text, tone = 'neutral' }: Component008Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
