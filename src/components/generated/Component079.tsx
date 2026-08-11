export interface Component079Props {
  title: string
  description: string
}

export function Component079({ title, description }: Component079Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
