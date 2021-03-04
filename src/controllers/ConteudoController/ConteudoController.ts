import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Conteudo from '../../models/entity/Conteudo'

export default class ConteudoController {

    index = async (req: Request, res: Response) => {
        try {
            const object = await getRepository(Conteudo).find()
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar ${error}`);

            return res.status(400).json(error)
        }
    }

    find = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const object = await getRepository(Conteudo).findOne(id)
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar encontrar o registro${error}`);
            return res.status(400).json({ msgErro: error })
        }
    }

    update = async (req: Request, res: Response) => {
        const { id } = req.params
        const data = req.body
        try {
            const object = await getRepository(Conteudo).update(id, data)
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar ${error}`);

            return res.status(400).json(error)
        }
    }

    store = async (req: Request, res: Response) => {
        const data = req.body
        console.log(data);

        try {
            const object = await getRepository(Conteudo).save(data)
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar persistir os dasdos${{ msgErro: error }}`);
            return res.status(400).json(error)
        }
    }

    delete = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const object = await getRepository(Conteudo).delete(id)
            return res.status(200).json({ msg: "Item removido" })
        } catch (error) {
            console.log(`falha ao tentar deletar o objeto ${error}`);
            return res.status(400).json(error)
        }
    }



}