import cors from 'cors'
import express, { Application, Request, Response, Router } from 'express'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/user', Router)

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'The server is running',
  })
}

app.get('/', getAController)

// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app
