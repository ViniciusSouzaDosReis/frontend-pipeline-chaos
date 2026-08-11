type Tone = 'neutral' | 'success' | 'danger'

export interface Component110Props {
  text: string
  tone?: Tone
}

export function Component110({ text, tone = 'neutral' }: Component110Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
