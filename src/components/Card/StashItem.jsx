const StashItem = ({ stash }) => {
    return (
        <div>
            {stash.map((item) => (
                <div key={item.rav_id} className="card card-compact card-bordered image-full w-full h-12">
                    <figure><img src={item.photo.small_url} alt="skein of yarn" /></figure>
                    <div className="card-body">
                        <h3 className="card-header">{item.name}</h3>
                        <p className=""> by {item.yarn_company}</p>
                        <p className="">{item.yarn_weight.name}</p>
                        <p className="">{item.yardage} yds</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">suggest projects!</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StashItem