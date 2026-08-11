export interface Component019Props {
  title: string
  description: string
}

export function Component019({ title, description }: Component019Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
