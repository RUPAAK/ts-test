import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { app } from "./app";

dotenv.config()

const server= require('http').createServer(app)

const PORT= process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL! , {
    useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('DATABASE CONNECTED')).catch((e)=> console.log(e.message))

server.listen(PORT, ()=> console.log('SERVER UP AND RUNNING'))