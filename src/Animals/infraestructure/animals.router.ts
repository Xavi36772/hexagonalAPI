import { Router } from "express";
import { allAnimalsController, deleteCuyoController1 } from "./dependencies";
import { cuyoPost } from "./dependencies";


const animmalRouter = Router();

animmalRouter.get("/",allAnimalsController.run.bind(allAnimalsController))

animmalRouter.post("/",cuyoPost.run.bind(cuyoPost))

animmalRouter.delete("/:id_Roedor",deleteCuyoController1.run.bind(deleteCuyoController1))

export default animmalRouter;