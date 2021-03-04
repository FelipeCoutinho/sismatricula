import { Request, Response } from 'express'
import { } from 'express'
import { getRepository } from 'typeorm'
import Aula from '../../../models/entity/Aula'

export default class AulaController {

    index = async (req: Request, res: Response) => {
        try {
            const object = await getRepository(Aula).find()
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar ${error}`);

            return res.status(400).json(error)
        }
    }

    find = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const object = await getRepository(Aula).findOne(id)
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar encontrar o registro${error}`);
            return res.status(400).json({ msgErro: error })
        }
    }

    update = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const object = await getRepository(Aula).find()
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar ${error}`);

            return res.status(400).json(error)
        }
    }
    store = async (req: Request, res: Response) => {
        const data = req.body
        try {
            const object = await getRepository(Aula).save(data)
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar persistir os dasdos${{ msgErro: error }}`);
            return res.status(400).json(error)
        }
    }

    delete = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const object = await getRepository(Aula).delete(id)
            return res.status(200).json({ msg: "Item removido" })
        } catch (error) {
            console.log(`falha ao tentar deletar o objeto ${error}`);
            return res.status(400).json(error)
        }
    }



}