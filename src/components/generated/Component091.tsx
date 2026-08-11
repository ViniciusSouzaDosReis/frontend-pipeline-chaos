export interface Component091Props {
  title: string
  description: string
}

export function Component091({ title, description }: Component091Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
