import { MySqlAdapter } from "../adapters/mysql.adapters";
import { CrearAlertas, GetAllAlertas } from "../../application/services/alertaAgua";
import { CrearALertasQ, GetAllControllers } from "../getAlertas";

const MySqlAdapterr = new MySqlAdapter();
const getAlertas = new GetAllAlertas(MySqlAdapterr);
export const getControllers = new GetAllControllers(getAlertas);

const crearAlerta = new CrearAlertas(MySqlAdapterr);
export const getControllersPost = new CrearALertasQ(crearAlerta);
