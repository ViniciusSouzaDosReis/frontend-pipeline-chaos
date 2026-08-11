export interface Component001Props {
  title: string
  description: string
}

export function Component001({ title, description }: Component001Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
