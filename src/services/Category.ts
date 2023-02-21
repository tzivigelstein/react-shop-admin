import Fetching from '@/services/utils'
import { ICategory, IAddCategory, IProduct } from '@/services/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? 'v1'

export default class Category {
  private static readonly SERVICE: string = 'categories'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getCategories(): Promise<ICategory[]> {
    return Fetching.fetch(this.URL)
  }

  static async addCategory(category: IAddCategory): Promise<ICategory> {
    return Fetching.fetch(this.URL, {
      method: 'POST',
      body: JSON.stringify(category)
    })
  }

  static async getCategory(id: number): Promise<ICategory> {
    return await Fetching.fetch(`${this.URL}/${id}`)
  }

  static async updateCategory(
    id: number,
    data: IAddCategory
  ): Promise<ICategory> {
    return await Fetching.fetch(`${this.URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  static async deleteCategory(id: number): Promise<boolean> {
    return await Fetching.fetch(`${this.URL}/${id}`, { method: 'DELETE' })
  }

  static async getProductsByCategory(id: number): Promise<IProduct[]> {
    return await Fetching.fetch(`${this.URL}/products`)
  }
}
