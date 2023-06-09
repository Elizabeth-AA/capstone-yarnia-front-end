import HeroCard from "@components/Cards/HeroCard"

const YarnHero = ({ item }) => {
    const parsedPhoto = item.photo ? JSON.parse(item.photo) : {}
    return (
        <div
            className="hero flex flex-col py-10 bg-cover"
            style={{backgroundImage: `url(${parsedPhoto.medium_url})`}}
        >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content max-h-64 md:max-h-72 lg:max-h-80 bg-accent-content bg-opacity-80 rounded-lg text-primary gap-2 flex flex-wrap flex-col shadow-xl">
                <HeroCard
                item={item}
                />
            </div>
        </div>
    )
}

export default YarnHero