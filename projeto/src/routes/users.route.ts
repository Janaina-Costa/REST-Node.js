import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes'







const usersRoute =  Router()

// get/users = buscar todos usuarios
usersRoute.get('/users',(req: Request, res: Response, next: NextFunction )=>{
    const users = [{userName:'Janaina'}]
    res.status(StatusCodes.OK).send(users)
})

// get/users/:uuid = buscar ususrio especifico
usersRoute.get('/users/:uuid', (req: Request<{uuid : string}>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({uuid})
} )

// post/users = Criar usuario
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction )=>{
    const newUser = req.body
    console.log(req.body)
    res.status(StatusCodes.CREATED).send(newUser)
    
})

// put/users/:uuid = alterar usuario
usersRoute.put('/users/:uuid', (req: Request<{uuid : string}>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid
    const modifiUser = req.body
    modifiUser.uuid = uuid
    console.log(modifiUser)
    res.status(StatusCodes.OK).send(modifiUser)
})

// <p style = 'blue'><b >//configurando put/users/:uuid : </b></p> = deletar usuario
usersRoute.delete('/users/:uuid', (req:Request, res: Response, next: NextFunction)=>{
    res.sendStatus(StatusCodes.OK)
})

export default usersRoute