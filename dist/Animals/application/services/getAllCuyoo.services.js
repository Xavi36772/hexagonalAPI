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
exports.deleteCuyo = exports.agregarCuyo = exports.getAllAnimalsService = void 0;
// Service to get all animals
class getAllAnimalsService {
    constructor(_animalsRepository) {
        this._animalsRepository = _animalsRepository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._animalsRepository.getAllAnimals();
                return res;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.getAllAnimalsService = getAllAnimalsService;
// Service to add a new cuyo
class agregarCuyo {
    constructor(_animalsRepository) {
        this._animalsRepository = _animalsRepository;
    }
    run(nuevaCuyo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._animalsRepository.agregarCuyo(nuevaCuyo);
            }
            catch (error) {
                throw new Error(`Error adding alerta: ${error.message}`);
            }
        });
    }
}
exports.agregarCuyo = agregarCuyo;
// Service to delete a cuyo
class deleteCuyo {
    constructor(_animalsRepository) {
        this._animalsRepository = _animalsRepository;
    }
    run(id_Roedor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._animalsRepository.deleteCuyo(id_Roedor);
            }
            catch (error) {
                throw new Error(`Error deleting cuyo: ${error.message}`);
            }
        });
    }
}
exports.deleteCuyo = deleteCuyo;
