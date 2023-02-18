import { apiFetch, API_URL, API_VERSION } from '@/services/utils'
import { IProduct, IAddProduct } from '@/services/types'

export default class Product {
  private static readonly SERVICE: string = 'products'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getProducts(): Promise<IProduct[]> {
    return apiFetch(this.URL)
  }

  static async addProduct(product: IAddProduct): Promise<IProduct> {
    return apiFetch(this.URL, {
      method: 'POST',
      body: JSON.stringify(product)
    })
  }

  static async getProduct(id: number): Promise<IProduct> {
    return await apiFetch(`${this.URL}/${id}`)
  }

  static async updateProduct(id: number, data: IAddProduct): Promise<IProduct> {
    return await apiFetch(`${this.URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  static async deleteProduct(id: number): Promise<boolean> {
    return await apiFetch(`${this.URL}/${id}`, {
      method: 'DELETE'
    })
  }
}
