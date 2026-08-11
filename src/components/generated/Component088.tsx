export interface Component088Props {
  title: string
  description: string
}

export function Component088({ title, description }: Component088Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
