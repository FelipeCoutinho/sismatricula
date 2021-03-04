import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
const AppKey = require('../../../../config/keyApp/secrete')

export default class AuthUser {

    authorization = (req: Request, res: Response, next) => {
        try {
            const token = req.headers.authorization

            if (!token) {
                return res.status(400).json("O token não foi enviado!")
            }

            jwt.verify(token, AppKey.secrete, (erro) => {
                if (erro) {
                    res.json({ msg: "token invalido" + erro })
                }

                console.log("user autorizado");

                next()
            })

        } catch (error) {
            console.log("erro: " + error);

        }

    }
}