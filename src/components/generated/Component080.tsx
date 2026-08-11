type Tone = 'neutral' | 'success' | 'danger'

export interface Component080Props {
  text: string
  tone?: Tone
}

export function Component080({ text, tone = 'neutral' }: Component080Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
