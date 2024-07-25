import { Request, Response } from "express";
import { agregarCuyo, getAllAnimalsService, deleteCuyo } from "../../application/services/getAllCuyoo.services";
import { cuyo } from "../../domain/entities/animal.entity";

// Controller to get all animals
export class getAllAnimalsController {
    constructor(private getAllAnimals: getAllAnimalsService) {}

    async run(req: Request, res: Response) {
        try {
            const response = await this.getAllAnimals.run();
            return res.status(200).json(response);
        } catch (error: any) {
            return res.status(500).json({ message: `Error fetching data: ${error.message}` });
        }
    }
}

// Controller to create a new cuyo
export class CrearRoedor {
    constructor(private postCuyo: agregarCuyo) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoCuyo: cuyo = req.body;

            if (!nuevoCuyo.id_Roedor || !nuevoCuyo.Nombre || !nuevoCuyo.edad || !nuevoCuyo.sexo || !nuevoCuyo.ingreso || !nuevoCuyo.raza) {
                return res.status(400).json({ message: "Faltan datos requeridos" });
            }

            await this.postCuyo.run(nuevoCuyo);
            return res.status(201).json({ message: 'Cuyo creado exitosamente' });
        } catch (error: any) {
            return res.status(500).json({ message: `Error adding cuyo: ${error.message}` });
        }
    }
}

// Controller to delete a cuyo
export class deleteCuyoController {
    constructor(private deleteCuyo: deleteCuyo) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id_Roedor } = req.params;

            if (!id_Roedor) {
                return res.status(400).json({ message: "Faltan datos requeridos" });
            }

            await this.deleteCuyo.run(parseInt(id_Roedor));
            return res.status(200).json({ message: 'Cuyo eliminado exitosamente' });
        } catch (error: any) {
            return res.status(500).json({ message: `Error deleting cuyo: ${error.message}` });
        }
    }
}
