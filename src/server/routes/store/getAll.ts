import { Express, Request, Response, NextFunction } from "express";
import { StoreController } from "../../../controller/store";

export class getAllRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const url = req.query.url;
      console.log(req.query);
      const result = await new StoreController().getAll(url);
      res.status(200).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.get(`${baseUrl}store/`, this.getAll);
  }
}
