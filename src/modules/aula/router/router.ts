import { Router } from 'express'
import AulaController from '../AulaController/AulaController'

const route = Router()
const aula = new AulaController()

route.get("/aula", aula.index)
route.get("/aula:id", aula.find)
route.post("/aula", aula.store)
route.put("/aula/:id", aula.update)
route.delete("/aula/:id", aula.delete)

export default route;