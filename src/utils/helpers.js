import { ravInstance, apiInstance } from '@services/axios'
import routes from '@services/routes.json'

export async function addUser(data) {
  try {
    const response = await apiInstance.post(routes.signup, JSON.stringify(data))
    if (response.status === 201) {
      return response
    }
  } catch (e) {
    console.log(e)
  }
}

export async function authUser(data) {
  try {
    const response = await apiInstance.post(routes.login, data)
    if (response.status === 201) {
      return response
    }
  } catch (e) {
    console.log(e)
  }
}

export async function getRavelryYarn(searchTerm) {
    try {
      const response = await ravInstance.get(`yarns/search.json?query=${searchTerm}&page_size=10`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      console.log(e)
    }
}

export async function addNewStash(data) {
  try {
    const response = await apiInstance.post(routes.users, JSON.stringify(data))
    if (response.status === 201) {
      return response
    }
  } catch (e) {
    console.log(e)
  }
}

export async function getRavelryProjects(permalink, patternCategories) {
  try {
    const promises = patternCategories.map(async (category) => {
      const response = await ravInstance.get(`projects/search.json?yarn-link=${permalink}&page_size=8&sort=best&pc=${category}`);
      if (response.status === 200) {
        return response.data;
      }
    })
    const results = await Promise.all(promises)
    return results
  } catch (e) {
    console.log(e)
  }
}
