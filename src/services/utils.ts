export async function apiFetch(URL: string, config: RequestInit = {}) {
  return await fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers
    },
    ...config
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.statusText)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
