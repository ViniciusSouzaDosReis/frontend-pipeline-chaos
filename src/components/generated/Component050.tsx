type Tone = 'neutral' | 'success' | 'danger'

export interface Component050Props {
  text: string
  tone?: Tone
}

export function Component050({ text, tone = 'neutral' }: Component050Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
