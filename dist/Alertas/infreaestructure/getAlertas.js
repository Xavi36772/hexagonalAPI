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
exports.CrearALertasQ = exports.GetAllControllers = void 0;
class GetAllControllers {
    constructor(getAllAlertas) {
        this.getAllAlertas = getAllAlertas;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Response = yield this.getAllAlertas.run();
                return res.json(Response).status(200);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.GetAllControllers = GetAllControllers;
class CrearALertasQ {
    constructor(postAlertas) {
        this.postAlertas = postAlertas;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevaAlerta = req.body; // Asegúrate de que el cuerpo de la solicitud contenga todos los campos necesarios
                // Verifica que `nuevaAlerta` no tenga campos `undefined`
                if (!nuevaAlerta.id_alertas || !nuevaAlerta.id_bebedero || !nuevaAlerta.tipo_alerta || !nuevaAlerta.fecha || !nuevaAlerta.estado) {
                    return res.status(400).json({ message: "Faltan datos requeridos" });
                }
                yield this.postAlertas.run(nuevaAlerta);
                return res.status(201).json({ message: 'Alerta creada exitosamente' });
            }
            catch (error) {
                return res.status(500).json({ message: `Error adding alerta: ${error.message}` });
            }
        });
    }
}
exports.CrearALertasQ = CrearALertasQ;
