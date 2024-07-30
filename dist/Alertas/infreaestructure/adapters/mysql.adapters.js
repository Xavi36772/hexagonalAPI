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
    estadoGet() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM alertas";
                const [res] = yield mySqlconn_1.db.execute(query);
                return res;
            }
            catch (err) {
                throw new Error(`Error fetching estado from alertas: ${err.message}`);
            }
        });
    }
    fecha() {
        throw new Error("Method not implemented.");
    }
    tipo_alertas() {
        throw new Error("Method not implemented.");
    }
    agregarAlerta(nuevaAlerta) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_alertas, id_bebedero, tipo_alerta, fecha, estado } = nuevaAlerta;
                const query = `
        INSERT INTO alertas (id_alertas, id_bebedero, tipo_alerta, fecha, estado) 
        VALUES (?, ?, ?, ?, ?)`;
                yield mySqlconn_1.db.execute(query, [
                    id_alertas,
                    id_bebedero,
                    tipo_alerta,
                    fecha,
                    estado,
                ]);
            }
            catch (err) {
                throw new Error(`Error inserting alerta: ${err.message}`);
            }
        });
    }
    eliminarAlerta(id_alertas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM alertas WHERE id_alertas = ?";
                yield mySqlconn_1.db.execute(query, [id_alertas]);
            }
            catch (err) {
                throw new Error(`Error deleting alerta: ${err.message}`);
            }
        });
    }
}
exports.MySqlAdapter = MySqlAdapter;
