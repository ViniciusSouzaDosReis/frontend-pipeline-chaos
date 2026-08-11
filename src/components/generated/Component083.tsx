type Tone = 'neutral' | 'success' | 'danger'

export interface Component083Props {
  text: string
  tone?: Tone
}

export function Component083({ text, tone = 'neutral' }: Component083Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
