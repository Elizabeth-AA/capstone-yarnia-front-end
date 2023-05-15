// detailed yarn info
// top patterns - direct to pattern on Ravelry
// future - patterns by category
import { useParams } from "react-router"
import { useLocation } from "react-router-dom"
import { getRavelryProjects } from "@utils/helpers"

export default function Projects() {
    const { ravId } = useParams()
    const location = useLocation()
    const item = location.state?.stashItem

    const projectSearch = async (yarnPermalink) => {
        try {
            const data = await getRavelryProjects(yarnPermalink)
            const searchResults = data.projects.map((item) => {
                
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <div>
                <figure><img className="max-h-32" src={item.photo.small_url} alt="skein of yarn" /></figure>
                <div>
                    <h1>{item.name}</h1>
                    <p>by {item.yarn_company}</p>
                    <p>{item.yarn_weight.name}</p>
                    <p>{item.yardage} yds</p>
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