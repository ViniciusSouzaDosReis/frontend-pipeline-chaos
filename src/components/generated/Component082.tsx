export interface Component082Props {
  title: string
  description: string
}

export function Component082({ title, description }: Component082Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
