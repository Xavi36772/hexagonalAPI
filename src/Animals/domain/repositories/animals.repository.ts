import { promises } from "dns";
import { cuyo } from "../entities/animal.entity";

export interface AnimalsRepository {
  getAllAnimals(): Promise <cuyo[]>
  agregarCuyo(nuevaCuyo: cuyo): Promise<void>
  deleteCuyo(id_Roedor: number): Promise<void>;
}
