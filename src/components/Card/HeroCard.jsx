export default function HeroCard({ item }) {
  const renderListItem = (label, value) => {
    if (value) {
      let renderedValue = value
      if (label === 'Machine Washable:' && value === true) {
        renderedValue = 'Machine Washable'
      }
      return (
        <li tabIndex={0} className="text-base font-medium md:text-lg cursor-auto my-1 mx-4">
          <span className="font-semibold">{label}</span> {renderedValue}
        </li>
      )
    }
    return null
  }

  return (
    <>
<span tabIndex={0} className="card__subheader font-semibold">
          {item.yarn_company}
        </span>
        <p tabIndex={0} className="card__header text-accent font-extrabold">
          {item.name}
        </p>
        <ul className="flex flex-wrap items-center">
          {renderListItem('Yarn Weight:', item.yarn_weight.name)}
          {renderListItem('Yardage:', `${item.yardage} yds`)}
          {renderListItem('Grams:', `${item.grams} g`)}
          {renderListItem('Machine Washable:', item.machine_washable)}
          {renderListItem('Texture:', item.texture)}
        </ul>
    </>
  )
}
