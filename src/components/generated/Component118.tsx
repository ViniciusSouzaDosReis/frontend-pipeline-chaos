export interface Component118Props {
  title: string
  description: string
}

export function Component118({ title, description }: Component118Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
