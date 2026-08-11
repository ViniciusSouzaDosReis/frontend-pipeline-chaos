export interface Component013Props {
  title: string
  description: string
}

export function Component013({ title, description }: Component013Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
