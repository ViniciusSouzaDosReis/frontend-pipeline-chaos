type Tone = 'neutral' | 'success' | 'danger'

export interface Component026Props {
  text: string
  tone?: Tone
}

export function Component026({ text, tone = 'neutral' }: Component026Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
