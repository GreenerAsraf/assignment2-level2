import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.routes'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', UserRoutes)

const getAController = (req: Request, res: Response) => {
  const a = 10
  res.sendStatus(a)
}

app.get('/', getAController)
export default app
