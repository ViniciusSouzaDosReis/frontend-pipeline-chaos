export interface Component043Props {
  title: string
  description: string
}

export function Component043({ title, description }: Component043Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
