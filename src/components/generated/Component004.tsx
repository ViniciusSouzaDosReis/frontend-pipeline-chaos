export interface Component004Props {
  title: string
  description: string
}

export function Component004({ title, description }: Component004Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
