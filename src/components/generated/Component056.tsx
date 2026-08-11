type Tone = 'neutral' | 'success' | 'danger'

export interface Component056Props {
  text: string
  tone?: Tone
}

export function Component056({ text, tone = 'neutral' }: Component056Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
