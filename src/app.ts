import express from 'express'
import cors from 'cors'
import "express-async-errors";


import { indexAuthRouter } from './route/auth'
import { NotFoundError } from './common/errors/not-found-error';
import { errorHandler } from './common/middlewares/error-handler';


const app: express.Application= express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', indexAuthRouter)


app.all("*", (req, res) => {
    throw new NotFoundError;
  });
  

app.use(errorHandler)

export {app}