import { Router } from 'express'
import EstudanController from '../EstudanteController/EstudanteController'

const estudante = new EstudanController()
const route = Router()

route.get("/estudante", estudante.index)
route.get("/estudante/:id", estudante.find)
route.post("/estudante", estudante.store)
route.put("/estudante/:id", estudante.update)
route.delete("/estudante/:id", estudante.delete)

export default route;