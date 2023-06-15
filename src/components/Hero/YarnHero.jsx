import HeroCard from "../Card/HeroCard"

const YarnHero = ({ item }) => {
    return (
        <div
            className="hero bg-secondary flex flex-col py-4 justify-evenly"
            style={{backgroundImage: `url(${item.photo.small_url})`}}
        >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content max-h-56 md:max-h-64 lg:max-h-72 bg-accent-content bg-opacity-75 rounded text-primary gap-2 flex flex-wrap flex-col">
                <HeroCard
                item={item}
                />
            </div>
        </div>
    )
}

export default YarnHero