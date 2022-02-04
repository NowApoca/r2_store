import { Express, Request, Response, NextFunction } from "express";
import { StoreController } from "../../../controller/store";

export class deleteByIdRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await new StoreController().deleteById(req.params.id);
      console.log("Result");
      console.log(result);
      res.status(204).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.delete(`${baseUrl}store/:id`, this.deleteById);
  }
}
