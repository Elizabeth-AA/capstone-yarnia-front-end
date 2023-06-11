import { useNavigate } from 'react-router-dom'
import projects_direct from '@assets/icons/yarnia-projects.png'

export default function StashCard({ item }) {
  const navigate = useNavigate()

  const toProjects = (item) => {
    navigate(`/yarn/${item.rav_id}`, { state: { item } })
  }

  const renderListItem = (label, value) => {
    if (value) {
      let renderedValue = value;
      if (label === 'Machine Washable:' && value === true) {
        renderedValue = 'Machine Washable';
      }
      return (
        <li tabIndex={0} className="card__details">
          {renderedValue}
        </li>
      );
    }
    return null;
  }

  return (
    <div tabIndex={0} className="card" key={item.rav_id}>
      <img
        src={item.photo.small_url}
        alt="skein of yarn"
        className="h-40 w-44 rounded-t-lg object-cover md:h-64 md:w-48 md:rounded-l-lg md:rounded-tr-none"
      />
      <div className="relative w-full px-4 py-3">
        <span tabIndex={0} className="card__subheader">
          {item.yarn_company}
        </span>
        <p tabIndex={0} className="card__header">
          {item.name}
        </p>
        <ul className="flex list-disc flex-wrap items-center">
          {renderListItem('Yarn Weight:', item.yarn_weight.name)}
          {renderListItem('Yardage:', `${item.yardage} yds`)}
          {renderListItem('Grams:', `${item.grams} grams`)}
          {renderListItem('Machine Washable:', item.machine_washable)}
          {renderListItem('Texture:', item.texture)}
        </ul>
        <div className="btn-tip" data-tip="see projects">
          <button onClick={() => toProjects(item)} className="absolute left-0 top-0 icon">
            <img src={projects_direct} />
          </button>
        </div>
      </div>
    </div>
  )
}
