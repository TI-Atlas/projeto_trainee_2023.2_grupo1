import { Request, Response } from "express";
import { UpdateCarroService } from "../services/UpdateCarroService";

export class UpdateCarroController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const { nome, descricao, preco, imagem } = request.body;   

        const service = new UpdateCarroService();

        const result = await service.execute({id, nome, descricao, preco, imagem});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}