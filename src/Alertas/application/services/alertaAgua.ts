import { alertas } from "../../domain/entities/alertas.entity";
import { AlertasRepository } from "../../domain/repositories/animal.repository";

export class GetAllAlertas {
  constructor(private readonly _alertaRepository: AlertasRepository) {}

  async run() {
    try {
      const res = await this._alertaRepository.estadoGet();
      return res;
    } catch (error: any) {
      throw new Error(`Error fetching alertas: ${error.message}`);
    }
  }
}

export class CrearAlertas {
  constructor(private readonly _alertaRepository: AlertasRepository) {}

  async run(nuevaAlerta: alertas): Promise<void> {
    try {
      await this._alertaRepository.agregarAlerta(nuevaAlerta);
    } catch (error: any) {
      throw new Error(`Error adding alerta: ${error.message}`);
    }
  }
}

export class EliminarAlertas {
  constructor(private readonly _alertaRepository: AlertasRepository) {}

  async run(id_alertas: number): Promise<void> {
    try {
      await this._alertaRepository.eliminarAlerta(id_alertas);
    } catch (error: any) {
      throw new Error(`Error deleting alerta: ${error.message}`);
    }
  }
}
