const StashCollapse = ({ stash }) => {
    return (
        <div className="section grid justify-center grid-col-1 md:grid-col-2 lg:grid-col-3 xl:grid-col-4">
        {stash.map((item) => (
            <div className="container w-42">
        <div
            tabIndex={0}
            className="collapse opacity-60 bg-cover hover:opacity-100"
            key={item.rav_id}
        >
            <div className="collapse-title p-0">
                <img className="rounded-t" src={item.photo.small_url} alt="skein of yarn" />
                <p tabIndex={0} className="pt-1 bg-primary font-serif text-secondary text-2xl tracking-wide text-center uppercase">{item.name}</p>
            </div>
            <div className="collapse-content rounded-b bg-primary px-2">
                <p tabIndex={0} className="text-accent text-center pb-1">by {item.yarn_company}</p>
                <div className="flex flex-wrap pt-2">
                    <p tabIndex={0} className="text-neutral text-left w-2/4">{item.yarn_weight.name}</p>
                    <p tabIndex={0} className="text-neutral text-right w-2/4">{item.yardage} yds</p>
                    <button tabIndex={0} className="mt-3 btn btn-xs btn-block btn-outline btn-secondary">suggest projects</button>
                </div>
            </div>
        </div>
        </div>
    ))}
    </div>
    )
}

export default StashCollapse