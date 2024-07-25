import { cuyo } from "../../domain/entities/animal.entity";
import { db } from "../../../share/infraestructure/mySqlconn";
import { AnimalsRepository } from "../../domain/repositories/animals.repository";

export class MySqlAdapter implements AnimalsRepository {
  
  async getAllAnimals(): Promise<cuyo[]> {
    try {
      const query = "SELECT * FROM cuyos";
      const [res] = await db.execute(query);
      return res as cuyo[];
    } catch (err: any) {
      throw new Error(`Error fetching data from cuyos: ${err.message}`);
    }
  }

  async agregarCuyo(nuevaCuyo: cuyo): Promise<void> {
    try {
      const { id_Roedor, Nombre, edad, sexo, ingreso, raza } = nuevaCuyo;
      const query = `
        INSERT INTO cuyos (id_Roedor, Nombre, edad, sexo, ingreso, raza) 
        VALUES (?, ?, ?, ?, ?, ?)`;

      await db.execute(query, [
        id_Roedor,
        Nombre,
        edad,
        sexo,
        ingreso,
        raza
      ]);
    } catch (err: any) {
      throw new Error(`Error inserting cuyo: ${err.message}`);
    }
  }

  async deleteCuyo(id_Roedor: number): Promise<void> {
    try {
      const query = "DELETE FROM cuyos WHERE id_Roedor = ?";
      await db.execute(query, [id_Roedor]);
    } catch (err: any) {
      throw new Error(`Error deleting cuyo: ${err.message}`);
    }
  }
}
