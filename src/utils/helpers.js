import { instance, instanceRav } from '@services/axios'
import routes from '@services/routes.json'

export async function getRavelryYarn() {
    try {
        const response = await instanceRav.get(routes.search)
        if (response.status === 200) {
            return response.data
        }
    } catch (e) {
        console.log(e)
    }
}