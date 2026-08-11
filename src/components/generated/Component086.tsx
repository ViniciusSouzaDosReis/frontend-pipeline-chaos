type Tone = 'neutral' | 'success' | 'danger'

export interface Component086Props {
  text: string
  tone?: Tone
}

export function Component086({ text, tone = 'neutral' }: Component086Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
