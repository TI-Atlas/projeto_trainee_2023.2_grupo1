import { Request, Response } from "express";
import { DeleteCarroService } from "../services/DeleteCarroService";

export class DeleteCarroController{
    async handle(request: Request, response: Response){
        const { id } = request.params;       
        const service = new DeleteCarroService();
        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.status(200).end();

    }
}

