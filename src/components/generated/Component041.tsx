type Tone = 'neutral' | 'success' | 'danger'

export interface Component041Props {
  text: string
  tone?: Tone
}

export function Component041({ text, tone = 'neutral' }: Component041Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
