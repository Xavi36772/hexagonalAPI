"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependecites_1 = require("./dependecites"); // Adjust the import based on your file structure
const bebedorRouter = (0, express_1.Router)();
// Define GET route
bebedorRouter.get('/', dependecites_1.GETcontrol.run.bind(dependecites_1.GETcontrol));
// Define POST route
bebedorRouter.post('/', dependecites_1.PostControl.run.bind(dependecites_1.PostControl));
// Define DELETE route for Roedor
bebedorRouter.delete('/roedor/:id', dependecites_1.DeleteControl.run.bind(dependecites_1.DeleteControl));
// Define DELETE route for Bebedero
bebedorRouter.delete('/bebedero/:id', dependecites_1.DeleteControl.run.bind(dependecites_1.DeleteControl));
exports.default = bebedorRouter;
