import { getRepository } from "typeorm";
import { Carros } from "../entities/carros";

type CarroRequest = {
    nome: string; 
    descricao: string;
    preco: number;
    imagem: string;

}
export class CarroService{
    async execute({nome, descricao, preco, imagem}:CarroRequest ): Promise<Carros | Error>{
        const repo = getRepository(Carros);
        if(await repo.findOne({nome})){ 
            return new Error ("carro ja cadastrado");}
        const carros = repo.create({nome, descricao, preco, imagem});
        await repo.save(carros);
        return carros;
        }
    }