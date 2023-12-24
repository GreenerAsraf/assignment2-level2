import { user } from './user.interface'
import { UserModel } from './user.model'

const createUserIntoDB = async (user: user) => {
  const result = await UserModel.create(user)
  return result
}

const getAllUsersFromDb = async () => {
  const result = await UserModel.find()
  return result
}

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDb,
}
