import Fetching from '@/services/utils'
import { IFile, IAddFile } from '@/services/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? 'v1'

export default class File {
  private static readonly SERVICE: string = 'files'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getFile(fileName: string): Promise<IFile> {
    return await Fetching.fetch(`${this.URL}/${fileName}`)
  }

  static async addFile(file: IAddFile): Promise<IFile> {
    return Fetching.fetch(`${this.URL}/upload`, {
      method: 'POST',
      body: JSON.stringify(file)
    })
  }
}
