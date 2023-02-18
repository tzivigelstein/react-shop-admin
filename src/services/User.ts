import { apiFetch } from '@/services/utils'
import { IUser, IAddUser } from '@/services/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? 'v1'

export default class User {
  private static readonly SERVICE: string = 'users'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getUsers(): Promise<IUser[]> {
    return await apiFetch(this.URL)
  }

  static async addUser(user: IUser): Promise<IAddUser> {
    return await apiFetch(this.URL, {
      method: 'POST',
      body: JSON.stringify(user)
    })
  }

  static async getUser(id: number): Promise<IUser> {
    return await apiFetch(`${this.URL}/${id}`)
  }

  static async updateUser(id: number, data: IAddUser): Promise<IUser> {
    return await apiFetch(`${this.URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  static async deleteUser(id: number): Promise<boolean> {
    return await apiFetch(`${this.URL}/${id}`, {
      method: 'DELETE'
    })
  }

  static async changeUserStatus(email: string) {
    return apiFetch(this.URL, {
      method: 'POST',
      body: JSON.stringify({
        email
      })
    })
  }
}
