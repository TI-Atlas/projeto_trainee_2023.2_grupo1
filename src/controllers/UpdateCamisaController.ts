import { Request, Response } from "express";
import { UpdateCamisaService } from "../services/UpdateCamisaService";

export class UpdateCamisaController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const { nome, descricao, preco, estoque, imagem } = request.body;   

        const service = new UpdateCamisaService();

        const result = await service.execute({id, nome, descricao, preco, estoque, imagem});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}