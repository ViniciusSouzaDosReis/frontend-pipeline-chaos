type Tone = 'neutral' | 'success' | 'danger'

export interface Component047Props {
  text: string
  tone?: Tone
}

export function Component047({ text, tone = 'neutral' }: Component047Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
