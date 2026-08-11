export interface Component049Props {
  title: string
  description: string
}

export function Component049({ title, description }: Component049Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
