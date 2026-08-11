export interface Component037Props {
  title: string
  description: string
}

export function Component037({ title, description }: Component037Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
