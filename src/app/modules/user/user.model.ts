import { Schema, model } from 'mongoose'
import { user } from './user.interface'

// Define sub-schemas
const FullNameSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const AddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
})

const OrderSchema = new Schema({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
})

// Define the main User schema
const UserSchema = new Schema<user>({
  userId: {
    type: Number,
    required: [true, 'Id is required'],
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    type: FullNameSchema,
    required: [true, 'Name is required'],
  },
  age: { type: Number },
  email: { type: String, required: true },
  isActive: { type: Boolean },
  hobbies: [{ type: String }, { type: String }],
  address: { type: AddressSchema, required: true },
  orders: [OrderSchema],
})

export const UserModel = model<user>('User', UserSchema)
