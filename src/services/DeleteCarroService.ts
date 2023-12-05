import { getRepository } from "typeorm";
import { Carros } from "../entities/carros";

export class DeleteCarroService{
 async execute(id:string){
    const repo = getRepository(Carros);
    if(!await repo.findOne({id})){
        return new Error ("Carro nao cadastrada");
    }
    await repo.delete(id);
    return "Carro deletado";
    }
}