type Tone = 'neutral' | 'success' | 'danger'

export interface Component044Props {
  text: string
  tone?: Tone
}

export function Component044({ text, tone = 'neutral' }: Component044Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
