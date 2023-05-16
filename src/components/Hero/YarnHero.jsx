const YarnHero = ({ item }) => {
    return (
        <div className="hero bg-base-200 flex flex-col md:flex-row py-4 justify-evenly">
            <figure className="justify-start max-h-48"><img className="opacity-80 rounded" src={item.photo.small_url} alt="skein of yarn" /></figure>
            <div className="hero-content max-h-48 bg-base-100 rounded text-neutral gap-2 flex flex-wrap md:flex-col">
                <h1 className="card-title">{item.name}</h1>
                <p>by {item.yarn_company}</p>
                <p>{item.yarn_weight.name}</p>
                <p>{item.yardage} yds</p>
            </div>
        </div>
    )
}

export default YarnHero