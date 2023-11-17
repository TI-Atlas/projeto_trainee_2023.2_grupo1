import { Router } from "express";
import { CamisaController } from "./controllers/CamisaController";
import { GetAllCamisasController } from "./controllers/GetAllCamisasController";
import { DeleteCamisaController } from "./controllers/DeleteCamisaController";
import { UpdateCamisaController } from "./controllers/UpdateCamisaController";

const routes = Router();

routes.post("/camisas", new CamisaController().handle); 
routes.get("/camisas", new GetAllCamisasController().handle);
routes.delete("/camisas/:id", new DeleteCamisaController().handle);
routes.put("/camisas/:id", new UpdateCamisaController().handle);

export { routes };