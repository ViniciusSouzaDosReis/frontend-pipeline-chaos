export interface Component052Props {
  title: string
  description: string
}

export function Component052({ title, description }: Component052Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
