export interface Component076Props {
  title: string
  description: string
}

export function Component076({ title, description }: Component076Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
