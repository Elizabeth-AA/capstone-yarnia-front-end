export default function ProjectCarousel({ searchResults }) {
  const patternCategories = ['clothing', 'accessories', 'home', 'toys and hobbies']

  return (
    <div className="section bg-base-200 rounded">
      {patternCategories.map((category) => {
        const categoryProjects = searchResults.filter((project) => project.category === category)
        return (
          <div key={category} className="p-4">
            <h3 className="card-header text-accent text-xl md:text-2xl lg:text-3xl capitalize pb-2">{category}</h3>
            <div className="carousel carousel-start relative p-4 space-x-2 bg-neutral rounded-box">
            {categoryProjects.length > 0 ? (
              categoryProjects.map((project, index) => (
                <div className="carousel-item" id={`${category}_slide${index}`} key={`${category}-${index}`}>
                  <img className="rounded-box h-40 md:h-48 lg:h-56" src={project.photo.small_url} />
                </div>
              ))
            ) : (
              <p className="text-error font-semibold text-lg md:text-lg">no projects for this category</p>
            )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
