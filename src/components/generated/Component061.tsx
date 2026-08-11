export interface Component061Props {
  title: string
  description: string
}

export function Component061({ title, description }: Component061Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
