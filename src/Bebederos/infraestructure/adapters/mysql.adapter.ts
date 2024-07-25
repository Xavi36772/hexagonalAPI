import { db } from "../../../share/infraestructure/mySqlconn";
import { BebederoE } from "../../domain/entities/bebedero.entity";
import { gateBebedero } from "../../domain/repositories/bebedero.repository";

export class MysqlAdapter implements gateBebedero {
    async eliminarBebedero(id: string): Promise<void> {
        try {
            const query = "DELETE FROM bebedero WHERE id_bebedero = ?";
            const [result] = await db.execute(query, [id]);

            if ((result as any).affectedRows === 0) {
                throw new Error(`Bebedero with id ${id} not found`);
            }
        } catch (err: any) {
            throw new Error(`Error deleting bebedero: ${err.message}`);
        }
    }
   
    async getAllBebedero(): Promise<BebederoE[]> {
        try {
            const query = "SELECT * FROM bebedero";
            const [res] = await db.execute(query);
            return res as BebederoE[];
        } catch (err: any) {
            throw new Error(`Error fetching bebedero: ${err.message}`);
        }
    }

    async agregarBebedero(nuevoBebedero: BebederoE): Promise<void> {
        try {
            const { id_bebedero, capacidad, estado } = nuevoBebedero;

            const query = `INSERT INTO bebedero (id_bebedero, capacidad, estado) VALUES (?, ?, ?)`;

            await db.execute(query, [
                id_bebedero,
                capacidad,
                estado,
            ]);
        } catch (err: any) {
            throw new Error(`Error inserting bebedero: ${err.message}`);
        }
    }
}
