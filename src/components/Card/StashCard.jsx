import { useNavigate } from 'react-router-dom'
import YarnCardContents from '@components/Card/YarnCardContents'
import projects_direct from '@assets/icons/yarnia-projects.png'

export default function StashCard({ item }) {
  const navigate = useNavigate()

  const toProjects = (item) => {
    navigate(`/yarn/${item.rav_id}`, { state: { item } })
  }

  return (
    <div tabIndex={0} className="card" key={item.rav_id}>
      <YarnCardContents item={item} />
      <div className="absolute bottom-0 right-0 btn-tip" data-tip="see projects">
        <button onClick={() => toProjects(item)} className="icon">
          <img src={projects_direct} />
        </button>
      </div>
    </div>
  )
}
