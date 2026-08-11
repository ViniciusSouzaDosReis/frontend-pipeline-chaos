export interface Component103Props {
  title: string
  description: string
}

export function Component103({ title, description }: Component103Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
