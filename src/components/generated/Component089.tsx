type Tone = 'neutral' | 'success' | 'danger'

export interface Component089Props {
  text: string
  tone?: Tone
}

export function Component089({ text, tone = 'neutral' }: Component089Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
