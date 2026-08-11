type Tone = 'neutral' | 'success' | 'danger'

export interface Component095Props {
  text: string
  tone?: Tone
}

export function Component095({ text, tone = 'neutral' }: Component095Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
