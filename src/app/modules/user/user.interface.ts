// import { Types } from 'mongoose'

export type TUserName = {
  firstName: string
  lastName: string
}

type Address = {
  street: string
  city: string
  country: string
}
type Orders = {
  productName: string
  price: number
  quantity: number
}
// Define the FullName type
type FullName = {
  firstName: string
  lastName: string
}

export type user = {
  userId: number
  username: string
  password: string
  fullName: FullName
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: Address
  orders?: Orders[]
}
