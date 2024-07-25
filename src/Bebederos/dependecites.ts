import { AgregarBebedero, GETtebederoService, EliminarBebederoService } from "./application/services/bebedero.service";
import { CrearBebedero, GetALLController, EliminarBebederoController } from "./infraestructure/controllers/bebederos.controller";
import { MysqlAdapter } from "./infraestructure/adapters/mysql.adapter";

// Create an instance of the MySQL adapter
const mysqlAdapter = new MysqlAdapter();

// Create an instance of the service with the MySQL adapter for GET
const getBebederoService = new GETtebederoService(mysqlAdapter);

// Create an instance of the service for adding records
const postBebedero = new AgregarBebedero(mysqlAdapter);

// Create an instance of the service for deleting records
const eliminarBebederoService = new EliminarBebederoService(mysqlAdapter);

// Create instances of the controllers with their respective services
export const GETcontrol = new GetALLController(getBebederoService);
export const PostControl = new CrearBebedero(postBebedero);
export const DeleteControl = new EliminarBebederoController(eliminarBebederoService);
