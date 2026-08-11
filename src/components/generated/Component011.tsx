type Tone = 'neutral' | 'success' | 'danger'

export interface Component011Props {
  text: string
  tone?: Tone
}

export function Component011({ text, tone = 'neutral' }: Component011Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
