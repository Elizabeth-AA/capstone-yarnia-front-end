import { useNavigate } from "react-router-dom"
import projects_direct from "@assets/icons/yarnia-projects.png"

export default function StashCard({ item }) {
  const navigate = useNavigate()

  const toProjects = (item) => {
      navigate(`/yarn/${item.rav_id}`, { state: { item } })
  }

  return (
    <div
      tabIndex={0}
      className="card"
      key={item.rav_id}
    >
      <img src={item.photo.small_url} alt="skein of yarn" className="h-40 w-44 md:h-64 md:w-48 object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg" />
      <div className="px-4 py-3 w-full">
          <span tabIndex={0} className="card__subheader">{item.yarn_company}</span>
          <p tabIndex={0} className="card__header">{item.name}</p>
          <ul className="list-disc flex items-center">
              <li tabIndex={0} className="card__details">{item.yarn_weight.name}</li>
              <li tabIndex={0} className="card__details">{item.yardage} yds</li>
              <div className="btn-tip" data-tip="see projects">
                <button onClick={() => toProjects(item)} className="icon"><img src={projects_direct} /></button>
                </div>
          </ul>
      </div>
    </div>
  )
}