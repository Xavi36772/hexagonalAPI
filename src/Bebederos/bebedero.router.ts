import { Router } from "express";
import { GETcontrol, PostControl, DeleteControl } from "./dependecites"; // Adjust the import based on your file structure

const bebedorRouter = Router();

// Define GET route
bebedorRouter.get('/', GETcontrol.run.bind(GETcontrol));

// Define POST route
bebedorRouter.post('/', PostControl.run.bind(PostControl));

// Define DELETE route for Roedor
bebedorRouter.delete('/roedor/:id', DeleteControl.run.bind(DeleteControl));

// Define DELETE route for Bebedero
bebedorRouter.delete('/bebedero/:id', DeleteControl.run.bind(DeleteControl));

export default bebedorRouter;
