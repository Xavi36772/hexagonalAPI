
import { MySqlAdapter } from "./Alertas/infreaestructure/adapters/mysql.adapters";
import  Express from "express";
import cors from "cors";
import {db} from "./share/infraestructure/mySqlconn"
import taskRouter from "./Alertas/infreaestructure/controllers/task.router";
import animmalRouter from "./Animals/infraestructure/animals.router";
import bebedorRouter from "./Bebederos/bebedero.router";

const mysqlAdapter = new MySqlAdapter() // croqueta

const app = Express();

const PORT = "3000";

app.disable("x-powerd-by")

app.use(cors());
app.use(Express.json());


app.use('/tasck', taskRouter)

app.use('/animal', animmalRouter)

app.use('/bebe',bebedorRouter)




db.connect()
 .then(() => console.log("Database connected"))

 .catch((err) => console.error("Error connecting to data base:" + err))

 app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
 })








// Instancia de adaptadores para base de datos (capa de infraestructura) 



