
import { BebederoE } from "../entities/bebedero.entity";

export interface gateBebedero {
    getAllBebedero(): Promise<BebederoE[]>
    agregarBebedero(nuevoBebedero: BebederoE): Promise<void>
    eliminarBebedero(id: string): Promise<void>;
} 