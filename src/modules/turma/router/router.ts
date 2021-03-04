import { Router } from 'express'
import turmaController from '../turmaController/turmaController'

const route = Router()
const turma = new turmaController()

route.get("/turma", turma.index)
route.get("/turma/:id", turma.find)
route.post("/turma", turma.store)
route.put("/turma/:id", turma.update)
route.delete("/turma/:id", turma.delete)

export default route;