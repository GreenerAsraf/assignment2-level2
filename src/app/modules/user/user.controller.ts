import { Request, Response } from 'express'
import { UserServices } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body
    const result = await UserServices.createUserIntoDB(userData)

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDb()
    res.status(200).json({
      success: true,
      message: 'AllUsers has been retrived successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const UserController = {
  createUser,
  getAllUsers,
}
