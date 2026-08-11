export interface Component016Props {
  title: string
  description: string
}

export function Component016({ title, description }: Component016Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
