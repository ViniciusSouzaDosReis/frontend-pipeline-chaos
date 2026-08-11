type Tone = 'neutral' | 'success' | 'danger'

export interface Component065Props {
  text: string
  tone?: Tone
}

export function Component065({ text, tone = 'neutral' }: Component065Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
