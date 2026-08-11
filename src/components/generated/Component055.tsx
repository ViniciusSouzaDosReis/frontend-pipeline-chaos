export interface Component055Props {
  title: string
  description: string
}

export function Component055({ title, description }: Component055Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
