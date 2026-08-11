export interface Component025Props {
  title: string
  description: string
}

export function Component025({ title, description }: Component025Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
