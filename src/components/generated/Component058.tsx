export interface Component058Props {
  title: string
  description: string
}

export function Component058({ title, description }: Component058Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
