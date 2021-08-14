import { signinRouter } from "./signin"

const router= require('express').Router()

router.use(signinRouter)

export {router as indexAuthRouter}