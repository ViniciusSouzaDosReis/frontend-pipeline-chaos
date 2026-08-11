type Tone = 'neutral' | 'success' | 'danger'

export interface Component101Props {
  text: string
  tone?: Tone
}

export function Component101({ text, tone = 'neutral' }: Component101Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
