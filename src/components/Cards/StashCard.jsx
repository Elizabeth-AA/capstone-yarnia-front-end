import { useNavigate } from 'react-router-dom'
import { LightBulbIcon, ScissorsIcon } from '@heroicons/react/24/outline'

export default function StashCard({ item, deleteFromStash }) {
  const navigate = useNavigate()

  const toProjects = (item) => {
    navigate(`/yarn/${item.rav_id}`, { state: { item } })
  }

  const handleDelete = () => {
    deleteFromStash(item.yarn_id)
  }

  const renderListItem = (label, value) => {
    if (value) {
      let renderedValue = value
      if (label === 'Machine Washable:' && value !== null) {
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

  const parsedPhoto = item.photo ? JSON.parse(item.photo) : {};

  return (
    <div tabIndex={0} className="card h-fit w-64 md:h-64 md:w-fit" key={item.rav_id}>
           <img
        src={parsedPhoto.small_url}
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
      <div className="absolute bottom-0 right-0 btn-tip" data-tip="see projects">
        <button onClick={() => toProjects(item)}>
          <LightBulbIcon className='icon' />
        </button>
      </div>
      <div className="absolute bottom-10 right-0 btn-tip" data-tip="remove from stash">
        <button onClick={handleDelete}>
          <ScissorsIcon className='icon' />
        </button>
      </div>
    </div>
  )
}
