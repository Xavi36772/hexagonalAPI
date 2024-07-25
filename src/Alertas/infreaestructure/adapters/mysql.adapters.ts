import { AlertasRepository } from "../../domain/repositories/animal.repository";
import { db } from "../../../share/infraestructure/mySqlconn";
import { alertas } from "../../domain/entities/alertas.entity";

export class MySqlAdapter implements AlertasRepository {

  async estadoGet(): Promise<alertas[]> {
    try {
      const query = "SELECT * FROM alertas";
      const [res] = await db.execute(query);
      return res as alertas[];
    } catch (err: any) {
      throw new Error(`Error fetching estado from alertas: ${err.message}`);
    }
  }

  fecha(): Date {
    throw new Error("Method not implemented.");
  }

  tipo_alertas(): string {
    throw new Error("Method not implemented.");
  }

  async agregarAlerta(nuevaAlerta: alertas): Promise<void> {
    try {
      const { id_alertas, id_bebedero, tipo_alerta, fecha, estado } = nuevaAlerta;

      const query = `
        INSERT INTO alertas (id_alertas, id_bebedero, tipo_alerta, fecha, estado) 
        VALUES (?, ?, ?, ?, ?)`;

      await db.execute(query, [
        id_alertas,
        id_bebedero,
        tipo_alerta,
        fecha,
        estado,
      ]);
    } catch (err: any) {
      throw new Error(`Error inserting alerta: ${err.message}`);
    }
  }

  async eliminarAlerta(id_alertas: number): Promise<void> {
    try {
      const query = "DELETE FROM alertas WHERE id_alertas = ?";
      await db.execute(query, [id_alertas]);
    } catch (err: any) {
      throw new Error(`Error deleting alerta: ${err.message}`);
    }
  }
}