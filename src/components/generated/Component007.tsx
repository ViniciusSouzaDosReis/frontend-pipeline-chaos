export interface Component007Props {
  title: string
  description: string
}

export function Component007({ title, description }: Component007Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
