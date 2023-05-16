// detailed yarn info
// top patterns - direct to pattern on Ravelry
// future - patterns by category
import { useLocation } from "react-router-dom"
import { getRavelryProjects } from "@utils/helpers"
import YarnHero from '@components/Hero/YarnHero'

export default function Projects() {
    const location = useLocation()
    const { item } = location.state
    const { id, rav_id, name, yarn_company, yarn_weight, yardage, photo, permalink } = item;

    const projectSearch = async (permalink) => {
        try {
            const data = await getRavelryProjects(permalink)
            const searchResults = data.projects.map((project) => ({
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
            }))
            console.log(searchResults)
        } catch (error) {
            console.log(error)
        }
    }

    projectSearch(item.permalink)

    return (
        <main>
            <YarnHero item={item} />
            <div>
                <h2>projects that used this yarn</h2>
                <div>
                    clothing
                    accessories
                    home
                    toysandhobbies
                </div>
                {/* user select filter in each category */}
                {/* narrow by colorway */}
            </div>
        </main>
    )
}