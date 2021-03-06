import express from 'express'
import * as usersRouter from './routes/users'

const app = express()
app.use('/users', usersRouter.index)

export default app
