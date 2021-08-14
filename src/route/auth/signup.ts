import { body } from "express-validator"
import { validateRequest } from "../../common"
import { signupHandler } from "../../controller/auth/signup"

const router= require('express').Router()

router.post('/',[
    body('name').notEmpty().withMessage('Name must be provided'),
    body('email').notEmpty().withMessage('Email must be provided'),
    body('pass').notEmpty().withMessage('Pass must be provided'),
], validateRequest, signupHandler)

export {router as signupRouter}