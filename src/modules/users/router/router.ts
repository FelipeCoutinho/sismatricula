import { Router } from 'express'
import UserController from '../UserController/UserController'
import Authorization from '../config/middleares/auth'


const user = new UserController()
const auth = new Authorization()

const userRouter = Router()
// User

userRouter.get("/", auth.authorization, user.index)
userRouter.post("/auth", user.authentincation)
userRouter.post("/", user.store)
// userRouter.post("/", user.)

export default userRouter;