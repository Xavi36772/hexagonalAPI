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
exports.EliminarBebederoController = exports.CrearBebedero = exports.GetALLController = void 0;
class GetALLController {
    constructor(bebederoService) {
        this.bebederoService = bebederoService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.bebederoService.run();
                return res.status(200).json(response); // Usa response en lugar de Response
            }
            catch (error) {
                return res.status(500).json({ message: `Error: ${error.message}` });
            }
        });
    }
}
exports.GetALLController = GetALLController;
class CrearBebedero {
    constructor(postBebedero) {
        this.postBebedero = postBebedero;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoBebedero = req.body;
                if (!nuevoBebedero.id_bebedero || !nuevoBebedero.capacidad || !nuevoBebedero.estado) {
                    return res.status(400).json({ message: "Faltan datos requeridos" });
                }
                yield this.postBebedero.run(nuevoBebedero); // Pasa los datos al método run
                return res.status(201).json({ message: 'Bebedero creado exitosamente' });
            }
            catch (error) {
                return res.status(500).json({ message: `Error adding bebedero: ${error.message}` });
            }
        });
    }
}
exports.CrearBebedero = CrearBebedero;
class EliminarBebederoController {
    constructor(eliminarBebederoService) {
        this.eliminarBebederoService = eliminarBebederoService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({ message: "ID del bebedero requerido" });
                }
                yield this.eliminarBebederoService.run(id);
                return res.status(200).json({ message: 'Bebedero eliminado exitosamente' });
            }
            catch (error) {
                return res.status(500).json({ message: `Error deleting bebedero: ${error.message}` });
            }
        });
    }
}
exports.EliminarBebederoController = EliminarBebederoController;
