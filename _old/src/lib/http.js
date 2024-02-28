import axios from 'axios'

const http = async (url, data = {}, options = {}) => {
  try {
    const response = await axios.post(url, data, options)

    if (!response) {
      return { error: `There was a problem. No response.` }
    }

    if (response.status !== 200) {
      return { error: `There was a problem. Status Code: ${response.status}` }
    }

    return response?.data
  } catch (e) {
    return { error: e.response?.data?.message || e.message }
  }
}

export default http
