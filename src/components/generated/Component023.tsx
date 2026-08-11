type Tone = 'neutral' | 'success' | 'danger'

export interface Component023Props {
  text: string
  tone?: Tone
}

export function Component023({ text, tone = 'neutral' }: Component023Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
