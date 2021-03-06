import express, {Request, Response, NextFunction} from 'express'
import statusRoute from './routes/status.rotes'
import usersRoute from './routes/users.route'

const app = express()

//consfiguração da aplicação
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//configuraçãp das rotas
app.use(usersRoute)
app.use(statusRoute)

//inicialização do servidor
app.listen(3000,()=>{
    console.log('Aplicação executando na porta 3000')
    
})

