import { body } from "express-validator"
import { validateRequest } from "../../common"
import { signinHandler } from "../../controller/auth/signin"

const router= require('express').Router()

router.post('/',[
    body('name').notEmpty().withMessage('Name must be provided'),
    body('email').notEmpty().withMessage('Email must be provided'),
    body('pass').notEmpty().withMessage('Pass must be provided'),
], validateRequest, signinHandler)

export {router as signinRouter}