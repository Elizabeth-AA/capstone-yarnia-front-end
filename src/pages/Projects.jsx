// detailed yarn info
// top patterns - direct to pattern on Ravelry
// future - patterns by category
import { useLocation } from "react-router-dom"
import { getRavelryProjects } from "@utils/helpers"
import YarnHero from '@components/Hero/YarnHero'
import ProjectItem from "../components/Carousel/ProjectItem"
import ProjectsCarousel from "@components/Carousel/ProjectsCarousel"
import { useEffect, useState } from "react"

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
            console.log(data)
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
                <h2 className="page-header text-center text-2xl md:text-3xl pt-4 pb-2">browse projects that use this yarn</h2>
                <ProjectItem searchResults={searchResults} />
                {/* <div>{carouselComponents}</div> */}
                {/* user select filter in each category */}
                {/* narrow by colorway */}
            </div>
        </main>
    )
}