export interface Component070Props {
  title: string
  description: string
}

export function Component070({ title, description }: Component070Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
