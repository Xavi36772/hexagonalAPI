import { agregarCuyo, getAllAnimalsService, deleteCuyo } from "../application/services/getAllCuyoo.services";
import { MySqlAdapter } from "./adapters/mysql.adapters";
import { CrearRoedor, getAllAnimalsController, deleteCuyoController } from "./controllers/getAllAnimals.controller";

// Crea una instancia del adaptador MySQL
const mySqlAdapter = new MySqlAdapter();

// Crea una instancia del servicio para obtener todos los animales
const allAnimalsService = new getAllAnimalsService(mySqlAdapter);
export const allAnimalsController = new getAllAnimalsController(allAnimalsService);

// Crea una instancia del servicio para agregar cuyos
const crearCuyooService = new agregarCuyo(mySqlAdapter);
export const cuyoPost = new CrearRoedor(crearCuyooService);

// Crea una instancia del servicio para eliminar cuyos
const deleteCuyooService = new deleteCuyo(mySqlAdapter);
export const deleteCuyoController1 = new deleteCuyoController(deleteCuyooService);
