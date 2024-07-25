import { Router } from "express";
import {getControllers, getControllersPost} from "./dependencies"


const taskRouter = Router()

taskRouter.get('/', getControllers.run.bind(getControllers))

taskRouter.post('/', getControllersPost.run.bind(getControllersPost))

export default taskRouter;