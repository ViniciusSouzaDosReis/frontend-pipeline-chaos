export interface Component034Props {
  title: string
  description: string
}

export function Component034({ title, description }: Component034Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
