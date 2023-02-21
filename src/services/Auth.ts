import Fetching from '@/services/utils'
import { ILoginData, ILoginResponse, IUser } from '@/services/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? 'v1'

export default class Auth {
  private static readonly SERVICE: string = 'auth'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getProfile(): Promise<IUser> {
    return Fetching.fetch(`${this.URL}/profile`)
  }

  static async login(data: ILoginData): Promise<ILoginResponse> {
    return Fetching.fetch(`${this.URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  static async refreshToken(token: string) {
    return await Fetching.fetch(this.URL, {
      method: 'POST',
      body: JSON.stringify({
        refreshToken: token
      })
    })
  }
}
