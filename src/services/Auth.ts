import { apiFetch } from '@/services/utils'
import { ILoginData } from '@/services/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? 'v1'

export default class Auth {
  private static readonly SERVICE: string = 'auth'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getProfile() {
    return apiFetch(`${this.URL}/profile`)
  }

  static async login(data: ILoginData) {
    return apiFetch(`${this.URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  static async refreshToken(token: string) {
    return await apiFetch(this.URL, {
      method: 'POST',
      body: JSON.stringify({
        refreshToken: token
      })
    })
  }
}
