type Tone = 'neutral' | 'success' | 'danger'

export interface Component116Props {
  text: string
  tone?: Tone
}

export function Component116({ text, tone = 'neutral' }: Component116Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
