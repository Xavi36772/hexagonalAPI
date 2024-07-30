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
exports.deleteCuyoController = exports.CrearRoedor = exports.getAllAnimalsController = void 0;
// Controller to get all animals
class getAllAnimalsController {
    constructor(getAllAnimals) {
        this.getAllAnimals = getAllAnimals;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.getAllAnimals.run();
                return res.status(200).json(response);
            }
            catch (error) {
                return res.status(500).json({ message: `Error fetching data: ${error.message}` });
            }
        });
    }
}
exports.getAllAnimalsController = getAllAnimalsController;
// Controller to create a new cuyo
class CrearRoedor {
    constructor(postCuyo) {
        this.postCuyo = postCuyo;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoCuyo = req.body;
                if (!nuevoCuyo.id_Roedor || !nuevoCuyo.Nombre || !nuevoCuyo.edad || !nuevoCuyo.sexo || !nuevoCuyo.ingreso || !nuevoCuyo.raza) {
                    return res.status(400).json({ message: "Faltan datos requeridos" });
                }
                yield this.postCuyo.run(nuevoCuyo);
                return res.status(201).json({ message: 'Cuyo creado exitosamente' });
            }
            catch (error) {
                return res.status(500).json({ message: `Error adding cuyo: ${error.message}` });
            }
        });
    }
}
exports.CrearRoedor = CrearRoedor;
// Controller to delete a cuyo
class deleteCuyoController {
    constructor(deleteCuyo) {
        this.deleteCuyo = deleteCuyo;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Roedor } = req.params;
                if (!id_Roedor) {
                    return res.status(400).json({ message: "Faltan datos requeridos" });
                }
                yield this.deleteCuyo.run(parseInt(id_Roedor));
                return res.status(200).json({ message: 'Cuyo eliminado exitosamente' });
            }
            catch (error) {
                return res.status(500).json({ message: `Error deleting cuyo: ${error.message}` });
            }
        });
    }
}
exports.deleteCuyoController = deleteCuyoController;
