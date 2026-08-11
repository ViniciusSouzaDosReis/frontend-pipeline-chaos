type Tone = 'neutral' | 'success' | 'danger'

export interface Component074Props {
  text: string
  tone?: Tone
}

export function Component074({ text, tone = 'neutral' }: Component074Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
