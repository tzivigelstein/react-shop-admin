import Fetching from '@/services/utils'
import { IProduct, IAddProduct } from '@/services/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? 'v1'

export default class Product {
  private static readonly SERVICE: string = 'products'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getProducts(): Promise<IProduct[]> {
    return Fetching.fetch(this.URL)
  }

  static async addProduct(product: IAddProduct): Promise<IProduct> {
    return Fetching.fetch(this.URL, {
      method: 'POST',
      body: JSON.stringify(product)
    })
  }

  static async getProduct(id: number): Promise<IProduct> {
    return await Fetching.fetch(`${this.URL}/${id}`)
  }

  static async updateProduct(id: number, data: IAddProduct): Promise<IProduct> {
    return await Fetching.fetch(`${this.URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  static async deleteProduct(id: number): Promise<boolean> {
    return await Fetching.fetch(`${this.URL}/${id}`, {
      method: 'DELETE'
    })
  }
}
