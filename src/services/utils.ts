class Fetching {
  headers: { [key: string]: string } = {
    'Content-Type': 'application/json'
  }

  async fetch(URL: string, config: RequestInit = {}) {
    return await fetch(URL, {
      headers: {
        ...this.headers,
        ...config?.headers
      },
      ...config
    }).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.statusText)
      }
    })
  }
}

export default new Fetching()
