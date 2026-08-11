type Tone = 'neutral' | 'success' | 'danger'

export interface Component077Props {
  text: string
  tone?: Tone
}

export function Component077({ text, tone = 'neutral' }: Component077Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
