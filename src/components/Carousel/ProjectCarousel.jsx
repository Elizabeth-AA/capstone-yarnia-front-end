import { InformationCircleIcon } from '@heroicons/react/24/outline'
export default function ProjectCarousel({ searchResults }) {
  const patternCategories = ['clothing', 'accessories', 'home', 'toys and hobbies']

  return (
    <div className="section-border mt-2 mx-1">
      {patternCategories.map((category) => {
        const categoryProjects = searchResults.filter((project) => project.category === category)
        return (
          <div key={category} className="section-content bg-neutral mb-4 last:mb-2">
            <h3 className="card-header text-accent-content ml-2 pt-2 text-xl md:text-2xl lg:text-3xl capitalize pb-2">{category}</h3>
            <div className="carousel carousel-start relative pt-2 pb-6 px-4 space-x-4 rounded-box">
            {categoryProjects.length > 0 ? (
              categoryProjects.map((project, index) => (
                <div
                  className="carousel-item relative"
                  id={`${category}_slide${index}`}
                  key={`${category}-${index}`}
                >
                  <img className="rounded-box h-48 md:h-56 lg:h-64" src={project.photo.small_url} />
                  <div className="btn-tip absolute right-0" data-tip="view on ravelry">
                  <a
                    href={`https://www.ravelry.com/projects/${project.user.username}/${project.permalink}`}
                    target="_blank"
                  >
                    <InformationCircleIcon className="icon text-base-content hover:text-accent" />
                  </a>
                  </div>
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