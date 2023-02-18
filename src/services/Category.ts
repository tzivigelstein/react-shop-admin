import { apiFetch, API_URL, API_VERSION } from '@/services/utils'
import { ICategory, IAddCategory, IProduct } from '@/services/types'

export default class Category {
  private static readonly SERVICE: string = 'categories'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getCategories(): Promise<ICategory[]> {
    return apiFetch(this.URL)
  }

  static async addCategory(category: IAddCategory): Promise<ICategory> {
    return apiFetch(this.URL, {
      method: 'POST',
      body: JSON.stringify(category)
    })
  }

  static async getCategory(id: number): Promise<ICategory> {
    return await apiFetch(`${this.URL}/${id}`)
  }

  static async updateCategory(
    id: number,
    data: IAddCategory
  ): Promise<ICategory> {
    return await apiFetch(`${this.URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  static async deleteCategory(id: number): Promise<boolean> {
    return await apiFetch(`${this.URL}/${id}`, { method: 'DELETE' })
  }

  static async getProductsByCategory(id: number): Promise<IProduct[]> {
    return await apiFetch(`${this.URL}/products`)
  }
}
