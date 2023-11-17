import { getRepository } from "typeorm";
import { Camisas } from "../entities/camisas";

type CamisaRequest = {
    nome: string; 
    descricao: string;
    preco: number;
    estoque: number;
    imagem: string;

}
export class CamisaService{
    async execute({nome, descricao, preco, estoque, imagem}:CamisaRequest ): Promise<Camisas | Error>{
        const repo = getRepository(Camisas);
        if(await repo.findOne({nome})){ 
            return new Error ("camisa ja cadastrada");}
        const camisas = repo.create({nome, descricao, preco, estoque, imagem});
        await repo.save(camisas);
        return camisas;
        }
    }