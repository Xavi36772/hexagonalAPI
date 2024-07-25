import { run } from "node:test";
import { gateBebedero } from "../../domain/repositories/bebedero.repository";
import { BebederoE } from "../../domain/entities/bebedero.entity";

export class GETtebederoService{
    constructor(private readonly  _bebederoRepository: gateBebedero ){}
        
    async run(){
        try{
            const res = await this._bebederoRepository.getAllBebedero();
            return res;
        }catch (error: any){
            throw new Error(error)
        }

    }
    
}

export class AgregarBebedero {
    constructor(private readonly _bebederoRepository: gateBebedero) {}

    async run(nuevoBebedero: BebederoE): Promise<void> {
        try {
            await this._bebederoRepository.agregarBebedero(nuevoBebedero);
        } catch (error: any) {
            throw new Error(`Error adding bebedero: ${error.message}`);
        }
    }
}

export class EliminarBebederoService {
    constructor(private readonly _bebederoRepository: gateBebedero) {}

    async run(id: string): Promise<void> {
        try {
            await this._bebederoRepository.eliminarBebedero(id);
        } catch (error: any) {
            throw new Error(`Error deleting bebedero: ${error.message}`);
        }
    }
}