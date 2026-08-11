type Tone = 'neutral' | 'success' | 'danger'

export interface Component038Props {
  text: string
  tone?: Tone
}

export function Component038({ text, tone = 'neutral' }: Component038Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
