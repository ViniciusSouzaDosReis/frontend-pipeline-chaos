type Tone = 'neutral' | 'success' | 'danger'

export interface Component062Props {
  text: string
  tone?: Tone
}

export function Component062({ text, tone = 'neutral' }: Component062Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
