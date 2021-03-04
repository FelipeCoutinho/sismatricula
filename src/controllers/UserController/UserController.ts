import { Request, Response } from 'express'
import { hash, hashSync } from 'bcrypt'
import { getRepository } from 'typeorm'
import User from '../../models/entity/User'

export default class UserController {

    index = async (req: Request, res: Response) => {
        try {

            const object = await getRepository(User).find()
            res.status(200).json(object)

        } catch (error) {
            console.log(`erro: ${error}`);
            res.status(400).json(error)
        }
    }

    store = async (req: Request, res: Response) => {
        try {

            const data = req.body
            data.password = this.incripitar(data.password)
            const object = await getRepository(User).save(data)
            res.status(201).json(object)

        } catch (error) {

            console.log(error);
            res.status(400).json(error)
        }
    }
    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const data = req.body
            const object = await getRepository(User).update(id, data)
            res.status(201).json(object)

        } catch (error) {
            console.log(error);
            res.status(400).json(error)
        }
    }
    dalete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const object = await getRepository(User).delete(id)
            res.status(200).json({ msg: "item deletado com sucesso!" })

        } catch (error) {
            console.log(error);
            res.status(400).json(error)
        }
    }

    incripitar = (password) => {
        try {
            return hashSync(password, 10)
        } catch (error) {
            console.log("falha ao tentar incriptar a senha");

        }
    }

}