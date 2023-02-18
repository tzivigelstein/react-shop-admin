import { apiFetch, API_URL, API_VERSION } from '@/services/utils'
import { IFile, IAddFile } from '@/services/types'

export default class File {
  private static readonly SERVICE: string = 'files'
  private static URL: string = `${API_URL}/api/${API_VERSION}/${this.SERVICE}`

  static async getFile(fileName: string): Promise<IFile> {
    return await apiFetch(`${this.URL}/${fileName}`)
  }

  static async addFile(file: IAddFile): Promise<IFile> {
    return apiFetch(`${this.URL}/upload`, {
      method: 'POST',
      body: JSON.stringify(file)
    })
  }
}
