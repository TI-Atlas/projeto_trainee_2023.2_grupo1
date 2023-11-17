import { getRepository } from "typeorm";
import { Camisas } from "../entities/camisas";

export class DeleteCamisaService{
 async execute(id:string){
    const repo = getRepository(Camisas);
    if(!await repo.findOne({id})){
        return new Error ("camisa nao cadastrada");
    }
    await repo.delete(id);
    return "camisa deletada";
    }
}