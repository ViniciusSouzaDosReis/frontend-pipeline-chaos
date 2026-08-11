type Tone = 'neutral' | 'success' | 'danger'

export interface Component035Props {
  text: string
  tone?: Tone
}

export function Component035({ text, tone = 'neutral' }: Component035Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
