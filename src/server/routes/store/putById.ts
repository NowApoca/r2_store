import { Express, Request, Response, NextFunction } from "express";
import { StoreController } from "../../../controller/store";

export class putByIdRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public putById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await new StoreController().putById(req.params.id, req.body);
      console.log("Result");
      console.log(result);
      res.status(200).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.put(`${baseUrl}store/:id`, this.putById);
  }
}
