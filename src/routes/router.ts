import { Router } from 'express'
import UserRouter from '../modules/users/router/router'
import AulaRouter from '../modules/aula/router/router'
import ConteudoRouter from '../modules/conteudo/router/router'
import EstudanRouter from '../modules/estudante/router/router'
import TurmaRouter from '../modules/turma/router/router'

// const user = new UserController()



const route = Router()
// User
route.use(UserRouter)

//Aula
route.use(AulaRouter)

//Conteudo
route.use(ConteudoRouter)

//Estudante
route.use(EstudanRouter)

//Turma
route.use(TurmaRouter)



export default route;