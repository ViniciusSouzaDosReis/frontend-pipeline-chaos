export interface Component010Props {
  title: string
  description: string
}

export function Component010({ title, description }: Component010Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
