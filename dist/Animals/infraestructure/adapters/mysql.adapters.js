"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlAdapter = void 0;
const mySqlconn_1 = require("../../../share/infraestructure/mySqlconn");
class MySqlAdapter {
    getAllAnimals() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM cuyos";
                const [res] = yield mySqlconn_1.db.execute(query);
                return res;
            }
            catch (err) {
                throw new Error(`Error fetching data from cuyos: ${err.message}`);
            }
        });
    }
    agregarCuyo(nuevaCuyo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Roedor, Nombre, edad, sexo, ingreso, raza } = nuevaCuyo;
                const query = `
        INSERT INTO cuyos (id_Roedor, Nombre, edad, sexo, ingreso, raza) 
        VALUES (?, ?, ?, ?, ?, ?)`;
                yield mySqlconn_1.db.execute(query, [
                    id_Roedor,
                    Nombre,
                    edad,
                    sexo,
                    ingreso,
                    raza
                ]);
            }
            catch (err) {
                throw new Error(`Error inserting cuyo: ${err.message}`);
            }
        });
    }
    deleteCuyo(id_Roedor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM cuyos WHERE id_Roedor = ?";
                yield mySqlconn_1.db.execute(query, [id_Roedor]);
            }
            catch (err) {
                throw new Error(`Error deleting cuyo: ${err.message}`);
            }
        });
    }
}
exports.MySqlAdapter = MySqlAdapter;
