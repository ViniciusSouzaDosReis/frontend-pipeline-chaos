export interface Component106Props {
  title: string
  description: string
}

export function Component106({ title, description }: Component106Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
