"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_adapters_1 = require("./Alertas/infreaestructure/adapters/mysql.adapters");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mySqlconn_1 = require("./share/infraestructure/mySqlconn");
const task_router_1 = __importDefault(require("./Alertas/infreaestructure/controllers/task.router"));
const animals_router_1 = __importDefault(require("./Animals/infraestructure/animals.router"));
const bebedero_router_1 = __importDefault(require("./Bebederos/bebedero.router"));
const mysqlAdapter = new mysql_adapters_1.MySqlAdapter(); // croqueta
const app = (0, express_1.default)();
const PORT = "3000";
app.disable("x-powerd-by");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/tasck', task_router_1.default);
app.use('/animal', animals_router_1.default);
app.use('/bebe', bebedero_router_1.default);
mySqlconn_1.db.connect()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Error connecting to data base:" + err));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Instancia de adaptadores para base de datos (capa de infraestructura) 
