"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const taskRouter = (0, express_1.Router)();
taskRouter.get('/', dependencies_1.getControllers.run.bind(dependencies_1.getControllers));
taskRouter.post('/', dependencies_1.getControllersPost.run.bind(dependencies_1.getControllersPost));
exports.default = taskRouter;
