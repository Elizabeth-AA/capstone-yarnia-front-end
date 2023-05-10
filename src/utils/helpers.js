import { ravInstance } from '@services/axios'
import routes from '@services/routes.json'
import axios from 'axios'

// export async function getRavelryYarn(searchTerm) {
//     try {
//         const response = await ravInstance.get(`${routes.search}${searchTerm}`)
//         if (response.status === 200) {
//             return response.data
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }

// export async function getRavelryYarn(searchTerm) {
//     try {
//         const response = await ravInstance.get(searchTerm)
//         if (response.status === 200) {
//             return response.data
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }

export async function getRavelryYarn(searchTerm) {
    try {
      const response = await ravInstance.get(`yarns/search.json?query=${searchTerm}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

