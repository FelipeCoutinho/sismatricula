import { Router } from 'express'
import ConteudoController from '../ConteudoController/ConteudoController'

const route = Router()
const conteudo = new ConteudoController()


route.get("/conteudo", conteudo.index)
route.get("/conteudo/:id", conteudo.find)
route.post("/conteudo", conteudo.store)
route.put("/conteudo/:id", conteudo.update)
route.delete("/conteudo/:id", conteudo.delete)

export default route;