import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRavelryProjects } from "@utils/helpers"
import YarnHero from '@components/Hero/YarnHero'
import ProjectCarousel from "@components/Carousel/ProjectCarousel"

export default function Projects() {
    const location = useLocation()
    const { item } = location.state
    const { rav_id, name, yarn_company, yarn_weight, yardage, photo, permalink } = item
    const patternCategories = ['clothing', 'accessories', 'home', 'toysandhobbies']
    const [searchResults, setSearchResults] = useState([])

    const projectSearch = async () => {
        try {
            const data = await getRavelryProjects(item.permalink, patternCategories)
            const results = data.flatMap((categoryData, index) => {
                const projectsData = categoryData?.projects || []
                const category = patternCategories[index]
                return projectsData.map((project) => ({
                    pattern_id: project.pattern_id,
                    pattern_name: project.pattern_name,
                    project_name: project.name,
                    rating: project.rating,
                    updated_at: project.updated_at,
                    status: project.status_name,
                    user: project.user,
                    user_id: project.user_id,
                    craft: project.craft_name,
                    photo: project.first_photo,
                    permalink: project.permalink,
                    category: category,
                })) 
            })
            setSearchResults(results)
        } catch (e) {
            console.log(e)
        }   
   }
       
    useEffect(() => {
        projectSearch()
    }, [])

    return (
        <main>
            <YarnHero item={item} />
            <div className="bg-primary">
                <h2 className="page-header text-center text-2xl md:text-3xl lg:text-4xl pt-6 pb-4">browse projects that use this yarn</h2>
                <ProjectCarousel searchResults={searchResults} />
            </div>
        </main>
    )
}