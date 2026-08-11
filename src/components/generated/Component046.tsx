export interface Component046Props {
  title: string
  description: string
}

export function Component046({ title, description }: Component046Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
