import { Router } from "express";
import { CarroController } from "./controllers/CamisaController";
import { GetAllCarrosController } from "./controllers/GetAllCarrosController";
import { DeleteCarroController } from "./controllers/DeleteCarroController";
import { UpdateCarroController } from "./controllers/UpdateCarroController";

const routes = Router();

routes.post("/carros", new CarroController().handle); 
routes.get("/carros", new GetAllCarrosController().handle);
routes.delete("/carros/:id", new DeleteCarroController().handle);
routes.put("/carros/:id", new UpdateCarroController().handle);

export { routes };