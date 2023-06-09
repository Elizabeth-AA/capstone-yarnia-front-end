import { useNavigate } from "react-router-dom"

export default function StashCard({ item }) {
  const navigate = useNavigate()

  const toProjects = (item) => {
      navigate(`/yarn/${item.rav_id}`, { state: { item } })
  }

  return (
    <div
      tabIndex={0}
      className="w-72 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl"
      key={item.rav_id}
    >
      <img src={item.photo.small_url} alt="skein of yarn" className="h-80 w-72 object-cover rounded-t-lg" />
      <div className="px-4 py-3 w-72">
          <span tabIndex={0} className="text-gray-400 mr-3 uppercase text-xs">{item.yarn_company}</span>
          <p tabIndex={0} className="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
          <div className="flex items-center">
              <p tabIndex={0} className="text-lg font-semibold text-black cursor-auto my-3">{item.yarn_weight.name}</p>
              <p tabIndex={0} className="text-lg font-semibold text-black cursor-auto my-3">{item.yardage} yds</p>
                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path
                          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
                <button onClick={() => toProjects(item)} className="btn">suggest projects</button>
          </div>
      </div>
    </div>
  )
}