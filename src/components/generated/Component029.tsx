type Tone = 'neutral' | 'success' | 'danger'

export interface Component029Props {
  text: string
  tone?: Tone
}

export function Component029({ text, tone = 'neutral' }: Component029Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
