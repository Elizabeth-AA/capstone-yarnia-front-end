import axios from '@services/axios'
import routes from '@services/routes.json'

export async function getRavelryYarn() {
    try {
        const response = await axios.get(routes.stash)
        if (response.status === 200) {
            return response.data
        }
    } catch (e) {
        console.log(e)
    }
}