import { Request, Response } from "express";
import { DeleteCamisaService } from "../services/DeleteCamisaService";

export class DeleteCamisaController{
    async handle(request: Request, response: Response){
        const { id } = request.params;       
        const service = new DeleteCamisaService();
        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.status(200).end();

    }
}

