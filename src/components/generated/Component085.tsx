export interface Component085Props {
  title: string
  description: string
}

export function Component085({ title, description }: Component085Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
