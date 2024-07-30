"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCuyoController1 = exports.cuyoPost = exports.allAnimalsController = void 0;
const getAllCuyoo_services_1 = require("../application/services/getAllCuyoo.services");
const mysql_adapters_1 = require("./adapters/mysql.adapters");
const getAllAnimals_controller_1 = require("./controllers/getAllAnimals.controller");
// Crea una instancia del adaptador MySQL
const mySqlAdapter = new mysql_adapters_1.MySqlAdapter();
// Crea una instancia del servicio para obtener todos los animales
const allAnimalsService = new getAllCuyoo_services_1.getAllAnimalsService(mySqlAdapter);
exports.allAnimalsController = new getAllAnimals_controller_1.getAllAnimalsController(allAnimalsService);
// Crea una instancia del servicio para agregar cuyos
const crearCuyooService = new getAllCuyoo_services_1.agregarCuyo(mySqlAdapter);
exports.cuyoPost = new getAllAnimals_controller_1.CrearRoedor(crearCuyooService);
// Crea una instancia del servicio para eliminar cuyos
const deleteCuyooService = new getAllCuyoo_services_1.deleteCuyo(mySqlAdapter);
exports.deleteCuyoController1 = new getAllAnimals_controller_1.deleteCuyoController(deleteCuyooService);
