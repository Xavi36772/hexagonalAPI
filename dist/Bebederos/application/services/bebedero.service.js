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
exports.EliminarBebederoService = exports.AgregarBebedero = exports.GETtebederoService = void 0;
class GETtebederoService {
    constructor(_bebederoRepository) {
        this._bebederoRepository = _bebederoRepository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._bebederoRepository.getAllBebedero();
                return res;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.GETtebederoService = GETtebederoService;
class AgregarBebedero {
    constructor(_bebederoRepository) {
        this._bebederoRepository = _bebederoRepository;
    }
    run(nuevoBebedero) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._bebederoRepository.agregarBebedero(nuevoBebedero);
            }
            catch (error) {
                throw new Error(`Error adding bebedero: ${error.message}`);
            }
        });
    }
}
exports.AgregarBebedero = AgregarBebedero;
class EliminarBebederoService {
    constructor(_bebederoRepository) {
        this._bebederoRepository = _bebederoRepository;
    }
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._bebederoRepository.eliminarBebedero(id);
            }
            catch (error) {
                throw new Error(`Error deleting bebedero: ${error.message}`);
            }
        });
    }
}
exports.EliminarBebederoService = EliminarBebederoService;
