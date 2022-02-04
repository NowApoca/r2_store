import { Express, Request, Response, NextFunction } from "express";
import { StoreController } from "../../../controller/store";

export class postStoreRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public postStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await new StoreController().postStore(req.body);
      console.log("Result post store");
      console.log(result);
      res.status(201).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.post(`${baseUrl}store`, this.postStore);
  }
}
