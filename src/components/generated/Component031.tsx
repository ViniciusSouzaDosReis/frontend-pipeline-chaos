export interface Component031Props {
  title: string
  description: string
}

export function Component031({ title, description }: Component031Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
