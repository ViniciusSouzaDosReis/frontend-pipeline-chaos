export interface Component040Props {
  title: string
  description: string
}

export function Component040({ title, description }: Component040Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
