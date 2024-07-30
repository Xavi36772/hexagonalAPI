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
exports.MysqlAdapter = void 0;
const mySqlconn_1 = require("../../../share/infraestructure/mySqlconn");
class MysqlAdapter {
    eliminarBebedero(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM bebedero WHERE id_bebedero = ?";
                const [result] = yield mySqlconn_1.db.execute(query, [id]);
                if (result.affectedRows === 0) {
                    throw new Error(`Bebedero with id ${id} not found`);
                }
            }
            catch (err) {
                throw new Error(`Error deleting bebedero: ${err.message}`);
            }
        });
    }
    getAllBebedero() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM bebedero";
                const [res] = yield mySqlconn_1.db.execute(query);
                return res;
            }
            catch (err) {
                throw new Error(`Error fetching bebedero: ${err.message}`);
            }
        });
    }
    agregarBebedero(nuevoBebedero) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_bebedero, capacidad, estado } = nuevoBebedero;
                const query = `INSERT INTO bebedero (id_bebedero, capacidad, estado) VALUES (?, ?, ?)`;
                yield mySqlconn_1.db.execute(query, [
                    id_bebedero,
                    capacidad,
                    estado,
                ]);
            }
            catch (err) {
                throw new Error(`Error inserting bebedero: ${err.message}`);
            }
        });
    }
}
exports.MysqlAdapter = MysqlAdapter;
