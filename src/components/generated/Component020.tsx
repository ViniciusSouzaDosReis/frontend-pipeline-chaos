type Tone = 'neutral' | 'success' | 'danger'

export interface Component020Props {
  text: string
  tone?: Tone
}

export function Component020({ text, tone = 'neutral' }: Component020Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
