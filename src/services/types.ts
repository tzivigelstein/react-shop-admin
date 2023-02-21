export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }
}

export interface IAddProduct {
  title: string
  price: number
  description: string
  categoryId: number
  images: string
}

export interface ICategory {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}

export interface IAddCategory {
  name: string
  image: string
}

export interface IUser {
  id: number
  email: string
  password: string
  name: string
  role: string
  avatar: string
  creationAt: string
  updatedAt: string
}

export interface IAddUser {
  email: string
  name: string
  password: string
  role: object
  avatar: string
}

export interface ILoginData {
  email: string
  password: string
}

export interface ILoginResponse {
  access_token: string
  refresh_token: string
}

export interface IFile {}
export interface IAddFile {}
