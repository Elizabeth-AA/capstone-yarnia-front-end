// detailed yarn info
// top patterns - direct to pattern on Ravelry
// future - patterns by category
import { useParams } from "react-router"
import { useLocation } from "react-router-dom"
import { getRavelryProjects } from "@utils/helpers"

export default function Projects() {
    const { ravId } = useParams()
    const location = useLocation()
    const { item } = location.state
    const { id, rav_id, name, yarn_company, yarn_weight, yardage, photo, permalink } = item;

    // const item = location.state?.stashItem

    const projectSearch = async (yarnPermalink) => {
        try {
            const data = await getRavelryProjects(yarnPermalink)
            const searchResults = data.projects.map((project) => {
                
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <div>
                <figure><img className="max-h-32" src={photo.small_url} alt="skein of yarn" /></figure>
                <div>
                    <h1>{name}</h1>
                    <p>by {yarn_company}</p>
                    <p>{yarn_weight.name}</p>
                    <p>{yardage} yds</p>
                </div>
                <div>
                    <h2>projects that used this yarn</h2>
                    {/* search for projects on rav using item.permalink */}
                    {/* /projects/search.json?yarn-link=YARN-PERMALINK */}
                    {/* filter for pattern categories */}
                    {/* /projects/search#pc=clothing&sort=completed&view=thumbs */}
                    {/* accessories, home, toys & hobbies */}
                    {/* narrow by colorway */}
                </div>
            </div>
        </main>
    )
}