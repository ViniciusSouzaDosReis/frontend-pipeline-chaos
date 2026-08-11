type Tone = 'neutral' | 'success' | 'danger'

export interface Component068Props {
  text: string
  tone?: Tone
}

export function Component068({ text, tone = 'neutral' }: Component068Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
