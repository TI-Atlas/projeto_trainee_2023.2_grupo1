import { Request, Response } from "express";
import { GetAllCamisasService } from "../services/GetAllCamisasService";

export class GetAllCamisasController{
    async handle(request: Request, response: Response){
        const service = new GetAllCamisasService();
        const camisas = await service.execute();
        
        return response.json(camisas);
    }
}