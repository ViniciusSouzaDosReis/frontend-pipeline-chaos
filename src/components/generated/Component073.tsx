export interface Component073Props {
  title: string
  description: string
}

export function Component073({ title, description }: Component073Props) {
  return (
    <div className="ds-card">
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
    </div>
  )
}
