import { Request, Response } from "express";
import { GetAllCarrosService } from "../services/GetAllCarrosService";

export class GetAllCarrosController{
    async handle(request: Request, response: Response){
        const service = new GetAllCarrosService();
        const carros = await service.execute();
        
        return response.json(carros);
    }
}