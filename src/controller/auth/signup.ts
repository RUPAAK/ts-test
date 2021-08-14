import {Request, Response} from 'express';
import { BadRequestError } from '../../common';
import { User } from '../../model/user';

const signup= async(req: Request, res: Response)=>{
    const {name, email, pass}= req.body

    const existUser= await User.findOne({email})

    if(existUser) throw new BadRequestError('Email in use')

    const user= User.build({name, email, pass})
    const createdUser= await user.save()

    res.status(201).send({
        data: createdUser
    })
}

export {signup as signupHandler}