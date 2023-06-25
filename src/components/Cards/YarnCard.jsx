export default function YarnCard({ item }) {
  const renderListItem = (label, value) => {
    if (value) {
      let renderedValue = value
      if (label === 'Machine Washable:' && value === true) {
        renderedValue = 'Machine Washable'
      }
      return (
        <li tabIndex={0} className="card__details">
          {renderedValue}
        </li>
      )
    }
    return null
  }

  return (
    <>
      <img
        src={item.photo.small_url}
        alt="skein of yarn"
        className="h-full w-64 rounded-t-lg object-cover md:w-48 md:rounded-l-lg md:rounded-tr-none"
      />
      <div className="relative w-44 px-4 py-3 md:max-w-screen-md">
        <span tabIndex={0} className="card__subheader">
          {item.yarn_company}
        </span>
        <p tabIndex={0} className="card__header">
          {item.name}
        </p>
        <ul className="flex list-disc flex-wrap items-center">
          {renderListItem('Yarn Weight:', item.yarn_weight.name)}
          {renderListItem('Yardage:', `${item.yardage} yds`)}
          {renderListItem('Grams:', `${item.grams} g`)}
          {renderListItem('Machine Washable:', item.machine_washable)}
          {renderListItem('Texture:', item.texture)}
        </ul>
      </div>
    </>
  )
}
