type Tone = 'neutral' | 'success' | 'danger'

export interface Component071Props {
  text: string
  tone?: Tone
}

export function Component071({ text, tone = 'neutral' }: Component071Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
