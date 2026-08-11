type Tone = 'neutral' | 'success' | 'danger'

export interface Component053Props {
  text: string
  tone?: Tone
}

export function Component053({ text, tone = 'neutral' }: Component053Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
