type Tone = 'neutral' | 'success' | 'danger'

export interface Component032Props {
  text: string
  tone?: Tone
}

export function Component032({ text, tone = 'neutral' }: Component032Props) {
  return <span className={`ds-badge ds-badge--${tone}`}>{text}</span>
}
