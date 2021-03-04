import { Router } from 'express'
import UserController from '../controllers/UserController/UserController'
import AulaController from '../controllers/AulaController/AulaController'
import ConteudoController from '../controllers/ConteudoController/ConteudoController'
import EstudanteController from '../controllers/EstudanteController/EstudanteController'
import TurmaController from '../controllers/TurmaController/TurmaController'

const user = new UserController()
const aula = new AulaController()
const conteudo = new ConteudoController()
const estudante = new EstudanteController()
const Turma = new TurmaController()

const route = Router()
// User
route.get("/", user.index)
route.post("/", user.store)

//Aula
route.get("/aula", aula.index)
route.get("/aula:id", aula.find)
route.post("/aula", aula.store)
route.put("/aula/:id", aula.update)
route.delete("/aula/:id", aula.delete)

//Conteudo
route.get("/conteudo", conteudo.index)
route.get("/conteudo/:id", conteudo.find)
route.post("/conteudo", conteudo.store)
route.put("/conteudo/:id", conteudo.update)
route.delete("/conteudo/:id", conteudo.delete)

//Estudante
route.get("/estudante", estudante.index)
route.get("/estudante/:id", estudante.find)
route.post("/estudante", estudante.store)
route.put("/estudante/:id", estudante.update)
route.delete("/estudante/:id", estudante.delete)

//Turma
route.get("/turma", Turma.index)
route.get("/turma/:id", Turma.find)
route.post("/turma", Turma.store)
route.put("/turma/:id", Turma.update)
route.delete("/turma/:id", Turma.delete)


export default route;