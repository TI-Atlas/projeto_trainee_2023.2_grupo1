import { getRepository } from "typeorm";
import { Camisas } from "../entities/camisas";

type CamisaUpdateRequest = {
    id: string;
    nome: string; 
    descricao: string;
    preco: number;
    estoque: number;
    imagem: string;
}
export class UpdateCamisaService {
    async execute({id, nome, descricao, preco, estoque, imagem}: CamisaUpdateRequest) {
        const repo = getRepository(Camisas);
        const camisas = await repo.findOne(id);

        console.log(id);

        if (!camisas) {
            return new Error("camisa nao cadastrada");
        }
        
        camisas.nome = nome ? nome : camisas.nome;
        camisas.descricao = descricao ? descricao : camisas.descricao;
        camisas.preco = preco ? preco : camisas.preco;
        camisas.estoque = estoque ? estoque : camisas.estoque;
        camisas.imagem = imagem ? imagem : camisas.imagem;

        await repo.save(camisas);

       
        return camisas;
    }
}