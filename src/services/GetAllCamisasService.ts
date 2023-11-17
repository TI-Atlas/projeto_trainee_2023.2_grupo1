import  {  getRepository } from "typeorm";
import { Camisas } from "../entities/camisas";


export class GetAllCamisasService{
    async execute(){
        const repo = getRepository(Camisas);
        const camisas = await repo.find();

        return camisas;
    }
}