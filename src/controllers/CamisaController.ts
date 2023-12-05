import { Request, Response } from "express";
import { CarroService } from "../services/CarroService";

export class CarroController{
    async handle(request: Request, response: Response){
        const {nome, descricao, preco, imagem} = request.body;
        const service = new CarroService();
        const result = await service.execute({nome, descricao, preco, imagem});
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}