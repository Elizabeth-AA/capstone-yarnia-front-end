export default function ProjectItem({ searchResults }) {
  const patternCategories = ['clothing', 'accessories', 'home', 'toysandhobbies']

  return (
    <div>
      {patternCategories.map((category) => {
        const categoryProjects = searchResults.filter((project) => project.category === category)
        return (
          <div key={category}>
            <h3>{category}</h3>
            {categoryProjects.length > 0 ? (
              categoryProjects.map((project, index) => (
                <div key={`${category}-${index}`}>
                  <p>{project.pattern_name}</p>
                </div>
              ))
            ) : (
              <p>no projects for this category</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
