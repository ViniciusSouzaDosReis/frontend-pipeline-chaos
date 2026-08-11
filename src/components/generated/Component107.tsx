type Tone = 'neutral' | 'success' | 'danger'

export interface Component107Props {
  text: string
  tone?: Tone
}

export function Component107({ text, tone = 'neutral' }: Component107Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
