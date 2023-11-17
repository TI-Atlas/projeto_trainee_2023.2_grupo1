import { Request, Response } from "express";
import { CamisaService } from "../services/CamisaService";

export class CamisaController{
    async handle(request: Request, response: Response){
        const {nome, descricao, preco, estoque, imagem} = request.body;
        const service = new CamisaService();
        const result = await service.execute({nome, descricao, preco, estoque, imagem});
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}