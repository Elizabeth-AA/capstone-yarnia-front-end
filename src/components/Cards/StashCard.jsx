import { useNavigate } from 'react-router-dom'
import { LightBulbIcon, ScissorsIcon } from '@heroicons/react/24/outline'
import YarnCard from '@components/Cards/YarnCard'

export default function StashCard({ item, deleteFromStash }) {
  const navigate = useNavigate()

  const toProjects = (item) => {
    navigate(`/yarn/${item.rav_id}`, { state: { item } })
  }

  const handleDelete = () => {
    deleteFromStash(item.yarn_id)
  }

  return (
    <div tabIndex={0} className="card h-fit w-64 md:h-64 md:w-fit" key={item.rav_id}>
      <YarnCard item={item} />
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
