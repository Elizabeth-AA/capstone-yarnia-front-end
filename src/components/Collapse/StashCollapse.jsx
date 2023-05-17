import { useNavigate } from "react-router-dom"

const StashCollapse = ({ stash }) => {
    const navigate = useNavigate()

    const toProjects = (item) => {
        navigate(`/yarn/${item.rav_id}`, { state: { item } })
    }

    return (
        <div className="section flex justify-center flex-col flex-wrap md:flex-row">
        {stash.map((item) => (
        <div
            tabIndex={0}
            className="collapse opacity-60 bg-cover hover:opacity-100 w-48 my-2 mx-4"
            key={item.rav_id}
        >
            <div className="collapse-title p-0">
                <button onClick={() => toProjects(item)} className="mt-3 btn btn-xs btn-block btn-secondary">suggest projects</button>
                <img className="rounded-t w-full h-44" src={item.photo.small_url} alt="skein of yarn" />
                <p tabIndex={0} className="pt-1 bg-primary font-serif text-secondary text-2xl tracking-wide text-center uppercase">{item.name}</p>
            </div>
            <div className="collapse-content rounded-b bg-primary px-2">
                <p tabIndex={0} className="text-accent text-center pb-1">by {item.yarn_company}</p>
                <div className="flex flex-wrap pt-2">
                    <p tabIndex={0} className="text-neutral-content text-left w-2/4">{item.yarn_weight.name}</p>
                    <p tabIndex={0} className="text-neutral-content text-right w-2/4">{item.yardage} yds</p>
                </div>
            </div>
        </div>
    ))}
    </div>
    )
}

export default StashCollapse