type Tone = 'neutral' | 'success' | 'danger'

export interface Component098Props {
  text: string
  tone?: Tone
}

export function Component098({ text, tone = 'neutral' }: Component098Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
