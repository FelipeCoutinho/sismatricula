import { json, request, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import User from '../../../models/entity/User'
const keyApp = require("../../../config/keyApp/secrete")

export default class UserController {

    index = async (req: Request, res: Response) => {
        try {
            const object = await getRepository(User).find()
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar ${error}`);

            return res.status(400).json(error)
        }
    }

    find = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const object = await getRepository(User).findOne(id)
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
            const object = await getRepository(User).update(id, data)
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar ${error}`);

            return res.status(400).json(error)
        }
    }
    store = async (req: Request, res: Response) => {
        const data = req.body
        try {
            data.password = this.incriptarSenha(data.password)
            const object = await getRepository(User).save(data)
            return res.status(200).json(object)
        } catch (error) {
            console.log(`falha ao tentar persistir os dasdos${{ msgErro: error }}`);
            return res.status(400).json(error)
        }
    }

    delete = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const object = await getRepository(User).delete(id)
            return res.status(200).json({ msg: "Item removido" })
        } catch (error) {
            console.log(`falha ao tentar deletar o objeto ${error}`);
            return res.status(400).json(error)
        }
    }

    authentincation = async (req: Request, res: Response) => {
        try {

            const { email, password } = req.body

            const object = await getRepository(User).findOne({ email })

            if (!object) {
                return res.json({ msg: "usuario não encontrado!" })
            }

            if (!await bcrypt.compare(password, object["password"])) {
                return res.status(400).json({ erro: `senha invalida` });
            }

            const token = await this.newToken(object["id"])
            console.log(`token: ${token}`);

            return res.status(200).json({ user: object, token: token })


        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error })
        }
    }

    private incriptarSenha = (senha) => {
        try {
            return bcrypt.hashSync(senha, 10)
        } catch (error) {
            console.log("falha ao tentar incriptar a senmha" + error);

        }
    }

    private newToken = async (idUse) => {
        try {

            return await jwt.sign({ idUse: idUse }, keyApp.secrete, { expiresIn: 86400 })
        } catch (error) {
            console.log("falaha " + error);

        }
    }

}