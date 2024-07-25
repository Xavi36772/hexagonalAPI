import { Request,response,Response } from "express";
import { AgregarBebedero, EliminarBebederoService, GETtebederoService } from "../../application/services/bebedero.service";
import { BebederoE } from "../../domain/entities/bebedero.entity";

export class GetALLController {
    constructor(private readonly bebederoService: GETtebederoService) {}

    async run(req: Request, res: Response) {
        try {
            const response = await this.bebederoService.run();
            return res.status(200).json(response);  // Usa response en lugar de Response
        } catch (error: any) {
            return res.status(500).json({ message: `Error: ${error.message}` });
        }
    }
}

export class CrearBebedero {
    constructor(private postBebedero: AgregarBebedero) {}
  
    async run(req: Request, res: Response): Promise<Response> {
      try {
        const nuevoBebedero: BebederoE = req.body;
  
        if (!nuevoBebedero.id_bebedero || !nuevoBebedero.capacidad || !nuevoBebedero.estado) {
          return res.status(400).json({ message: "Faltan datos requeridos" });
        }
  
        await this.postBebedero.run(nuevoBebedero); // Pasa los datos al método run
        return res.status(201).json({ message: 'Bebedero creado exitosamente' });
      } catch (error: any) {
        return res.status(500).json({ message: `Error adding bebedero: ${error.message}` });
      }
    }
  }

export class EliminarBebederoController {
    static run: any;
    constructor(private eliminarBebederoService: EliminarBebederoService) {}
    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "ID del bebedero requerido" });
            }

            await this.eliminarBebederoService.run(id);
            return res.status(200).json({ message: 'Bebedero eliminado exitosamente' });
        } catch (error: any) {
            return res.status(500).json({ message: `Error deleting bebedero: ${error.message}` });
        }
    }
}