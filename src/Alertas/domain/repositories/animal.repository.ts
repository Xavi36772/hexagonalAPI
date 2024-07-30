import { alertas } from "../entities/alertas.entity";

export interface AlertasRepository {

    estadoGet(): Promise<alertas[]>
    fecha(): Date;
    tipo_alertas(): string;
    agregarAlerta(nuevaAlerta: alertas): Promise<void>
    eliminarAlerta(id_alertas: number): Promise<void>;
  }