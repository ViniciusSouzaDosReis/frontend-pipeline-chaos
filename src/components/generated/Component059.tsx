type Tone = 'neutral' | 'success' | 'danger'

export interface Component059Props {
  text: string
  tone?: Tone
}

export function Component059({ text, tone = 'neutral' }: Component059Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
