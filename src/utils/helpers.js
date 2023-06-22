import { ravInstance, apiInstance } from '@services/axios'
import routes from '@services/routes.json'

export async function addUser(data) {
  try {
      const response = await apiInstance.post(routes.signup, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 201) {
        return (response)
      } else {
        throw new Error('signup failed')
      }
  } catch (e) {
      console.log(e)
  }
}

export async function authUser(data) {
  try {
      const token = localStorage.getItem('token')
      const response = await apiInstance.post(routes.login, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      })
      if (response.status === 201) {
      return response
      } else {
        throw new Error('login failed')
      }
  } catch (e) {
      throw e
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

export async function addNewStash(userId, data) {
  console.log("stash helper ", data)
  try {
    const token = localStorage.getItem('token')
    const response = await apiInstance.post(`api/user/${userId}`, data, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
      })
      console.log("helper response ", response)
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
