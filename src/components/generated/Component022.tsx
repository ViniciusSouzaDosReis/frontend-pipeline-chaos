export interface Component022Props {
  title: string
  description: string
}

export function Component022({ title, description }: Component022Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
