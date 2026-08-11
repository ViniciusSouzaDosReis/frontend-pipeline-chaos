export interface Component094Props {
  title: string
  description: string
}

export function Component094({ title, description }: Component094Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
