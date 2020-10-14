const http = async (url, body = '') => {
  try {
    const response = await fetch(url, {
      method: 'post',
      body: body,
    })

    if (!response) {
      return { error: `There was a problem. No response.` }
    }

    if (response.status !== 200) {
      return { error: `There was a problem. Status Code: ${response.status}` }
    }

    return await response.json?.()
  } catch (e) {
    return { error: `Fetch Error: ${e}` }
  }
}

export default http
