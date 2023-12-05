import { getRepository } from "typeorm";
import { Carros } from "../entities/carros";

type CarroUpdateRequest = {
    id: string;
    nome: string; 
    descricao: string;
    preco: number;
    imagem: string;
}
export class UpdateCarroService {
    async execute({id, nome, descricao, preco, imagem}: CarroUpdateRequest) {
        const repo = getRepository(Carros);
        const camisas = await repo.findOne(id);

        console.log(id);

        if (!camisas) {
            return new Error("carro nao cadastrado");
        }
        
        camisas.nome = nome ? nome : camisas.nome;
        camisas.descricao = descricao ? descricao : camisas.descricao;
        camisas.preco = preco ? preco : camisas.preco;
        camisas.imagem = imagem ? imagem : camisas.imagem;

        await repo.save(camisas);

       
        return camisas;
    }
}