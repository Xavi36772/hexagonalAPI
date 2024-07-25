import { GetAllAlertas } from "../application/services/alertaAgua";
import { Request, response, Response } from "express";
import { CrearAlertas } from "../application/services/alertaAgua";
import { promises } from "dns";
import { alertas } from "../domain/entities/alertas.entity";

export class GetAllControllers {
    constructor(private getAllAlertas: GetAllAlertas) { }

    async run(req: Request, res: Response){
        try{
            const Response = await this.getAllAlertas.run();

            return res.json(Response).status(200);
        }catch (error: any){
            throw new Error(error);
        }
    }
}

export class CrearALertasQ {
  constructor(private postAlertas: CrearAlertas) {}

  async run(req: Request, res: Response): Promise<Response> {
    try {
      const nuevaAlerta: alertas = req.body; // Asegúrate de que el cuerpo de la solicitud contenga todos los campos necesarios
      // Verifica que `nuevaAlerta` no tenga campos `undefined`
      if (!nuevaAlerta.id_alertas || !nuevaAlerta.id_bebedero || !nuevaAlerta.tipo_alerta || !nuevaAlerta.fecha || !nuevaAlerta.estado) {
        return res.status(400).json({ message: "Faltan datos requeridos" });
      }
      await this.postAlertas.run(nuevaAlerta);
      return res.status(201).json({ message: 'Alerta creada exitosamente' });
    } catch (error: any) {
      return res.status(500).json({ message: `Error adding alerta: ${error.message}` });
    }
  }
}