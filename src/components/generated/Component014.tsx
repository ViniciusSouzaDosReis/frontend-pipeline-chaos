type Tone = 'neutral' | 'success' | 'danger'

export interface Component014Props {
  text: string
  tone?: Tone
}

export function Component014({ text, tone = 'neutral' }: Component014Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
