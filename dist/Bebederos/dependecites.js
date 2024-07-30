"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteControl = exports.PostControl = exports.GETcontrol = void 0;
const bebedero_service_1 = require("./application/services/bebedero.service");
const bebederos_controller_1 = require("./infraestructure/controllers/bebederos.controller");
const mysql_adapter_1 = require("./infraestructure/adapters/mysql.adapter");
// Create an instance of the MySQL adapter
const mysqlAdapter = new mysql_adapter_1.MysqlAdapter();
// Create an instance of the service with the MySQL adapter for GET
const getBebederoService = new bebedero_service_1.GETtebederoService(mysqlAdapter);
// Create an instance of the service for adding records
const postBebedero = new bebedero_service_1.AgregarBebedero(mysqlAdapter);
// Create an instance of the service for deleting records
const eliminarBebederoService = new bebedero_service_1.EliminarBebederoService(mysqlAdapter);
// Create instances of the controllers with their respective services
exports.GETcontrol = new bebederos_controller_1.GetALLController(getBebederoService);
exports.PostControl = new bebederos_controller_1.CrearBebedero(postBebedero);
exports.DeleteControl = new bebederos_controller_1.EliminarBebederoController(eliminarBebederoService);
