import { useNavigate } from 'react-router-dom'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import YarnCard from '@components/Cards/YarnCard'

export default function StashCard({ item }) {
  const navigate = useNavigate()

  const toProjects = (item) => {
    navigate(`/yarn/${item.rav_id}`, { state: { item } })
  }

  return (
    <div tabIndex={0} className="card h-44 md:h-64 w-3/4" key={item.rav_id}>
      <YarnCard item={item} />
      <div className="absolute bottom-0 right-0 btn-tip" data-tip="see projects">
        <button onClick={() => toProjects(item)}>
          <LightBulbIcon className='icon' />
        </button>
      </div>
    </div>
  )
}
