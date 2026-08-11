export interface Component097Props {
  title: string
  description: string
}

export function Component097({ title, description }: Component097Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
