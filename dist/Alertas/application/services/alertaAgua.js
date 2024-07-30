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
exports.EliminarAlertas = exports.CrearAlertas = exports.GetAllAlertas = void 0;
class GetAllAlertas {
    constructor(_alertaRepository) {
        this._alertaRepository = _alertaRepository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._alertaRepository.estadoGet();
                return res;
            }
            catch (error) {
                throw new Error(`Error fetching alertas: ${error.message}`);
            }
        });
    }
}
exports.GetAllAlertas = GetAllAlertas;
class CrearAlertas {
    constructor(_alertaRepository) {
        this._alertaRepository = _alertaRepository;
    }
    run(nuevaAlerta) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._alertaRepository.agregarAlerta(nuevaAlerta);
            }
            catch (error) {
                throw new Error(`Error adding alerta: ${error.message}`);
            }
        });
    }
}
exports.CrearAlertas = CrearAlertas;
class EliminarAlertas {
    constructor(_alertaRepository) {
        this._alertaRepository = _alertaRepository;
    }
    run(id_alertas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._alertaRepository.eliminarAlerta(id_alertas);
            }
            catch (error) {
                throw new Error(`Error deleting alerta: ${error.message}`);
            }
        });
    }
}
exports.EliminarAlertas = EliminarAlertas;
