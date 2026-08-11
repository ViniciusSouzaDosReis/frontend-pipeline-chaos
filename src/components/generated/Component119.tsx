type Tone = 'neutral' | 'success' | 'danger'

export interface Component119Props {
  text: string
  tone?: Tone
}

export function Component119({ text, tone = 'neutral' }: Component119Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
