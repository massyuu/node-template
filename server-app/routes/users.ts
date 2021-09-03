import { Request, Response } from 'express'

/* GET users listing. */
export const index = (req: Request, res: Response): void => {
  res.send('respond with a resource')
}
