import { ravInstance, apiInstance } from '@services/axios'
import routes from '@services/routes.json'
import axios from 'axios'

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

export async function addNewStash(data) {
  try {
    const response = await apiInstance.post(routes.users, JSON.stringify(data))
    if (response.status === 201) {
      return response
    }
  } catch (error) {
    console.log(error)
  }
}
