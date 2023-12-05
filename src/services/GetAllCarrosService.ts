import  {  getRepository } from "typeorm";
import { Carros } from "../entities/carros";


export class GetAllCarrosService{
    async execute(){
        const repo = getRepository(Carros);
        const carros = await repo.find();

        return carros;
    }
}