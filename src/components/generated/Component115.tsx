export interface Component115Props {
  title: string
  description: string
}

export function Component115({ title, description }: Component115Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
