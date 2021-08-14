import { signupRouter } from "./signup"

const router= require('express').Router()

router.use(signupRouter)

export {router as indexAuthRouter}