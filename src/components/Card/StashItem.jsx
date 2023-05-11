import { Link } from "react-router-dom"

const StashItem = ({ stash }) => {
    return (
        <div className="flex justify-center flex-col md:flex-row md:flex-wrap">
            {stash.map((item) => (
                <div key={item.rav_id} className="card card-compact card-side flex items-start bg-primary relative max-h-32 w-3/4">
                    <figure><img className="max-h-32" src={item.photo.small_url} alt="skein of yarn" /></figure>
                    <div className="card-body gap-1">
                        <h3 className="card-header pt-0">{item.name}</h3>
                        <p>by {item.yarn_company}</p>
                        <p>{item.yarn_weight.name}</p>
                        <p>{item.yardage} yds</p>
                    </div>
                    <div className="card-actions justify-end absolute bottom-0 right-0">
                        <Link key={item.rav_id} to={`/projects/${item.rav_id}`}>
                            <button className="btn w-24 btn-square btn-secondary">suggest projects</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StashItem