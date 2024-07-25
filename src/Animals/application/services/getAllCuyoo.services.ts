import { cuyo } from "../../domain/entities/animal.entity";
import { AnimalsRepository } from "../../domain/repositories/animals.repository";

// Service to get all animals
export class getAllAnimalsService {
    constructor(private _animalsRepository: AnimalsRepository) {}

    async run() {
        try {
            const res = await this._animalsRepository.getAllAnimals();
            return res;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

// Service to add a new cuyo
export class agregarCuyo {
    constructor(private readonly _animalsRepository: AnimalsRepository) {}

    async run(nuevaCuyo: cuyo): Promise<void> {
        try {
            await this._animalsRepository.agregarCuyo(nuevaCuyo);
        } catch (error: any) {
            throw new Error(`Error adding alerta: ${error.message}`);
        }
    }
}

// Service to delete a cuyo
export class deleteCuyo {
    constructor(private readonly _animalsRepository: AnimalsRepository) {}

    async run(id_Roedor: number): Promise<void> {
        try {
            await this._animalsRepository.deleteCuyo(id_Roedor);
        } catch (error: any) {
            throw new Error(`Error deleting cuyo: ${error.message}`);
        }
    }
}
