import { Express } from "express";
import { getByIdRoute } from "./store/getById";
import { postStoreRoute } from "./store/postStore";
import { deleteByIdRoute } from "./store/deleteStore";
import { getAllRoute } from "./store/getAll";
import { putByIdRoute } from "./store/putById";
import { IndexRoute } from "./index/welcome";
export class Routes {
  private server: Express;
  private baseUrl: string = "/api/v1/";
  private indexRoute: IndexRoute;
  private getByIdRoute: getByIdRoute;
  private getAllRoute: getAllRoute;
  private postStoreRoute: postStoreRoute;
  private deleteByIdRoute: deleteByIdRoute;
  private putByIdRoute: putByIdRoute;

  constructor(server: Express) {
    this.server = server;
    this.getByIdRoute = new getByIdRoute(server);
    this.getAllRoute = new getAllRoute(server);
    this.postStoreRoute = new postStoreRoute(server);
    this.deleteByIdRoute = new deleteByIdRoute(server);
    this.putByIdRoute = new putByIdRoute(server);
    this.indexRoute = new IndexRoute(server);
    this.configureApiEndPoints(this.baseUrl);
  }

  public configureApiEndPoints(baseUrl: string) {
    this.indexRoute.configureEndPoints(baseUrl);
    this.getByIdRoute.configureEndPoints(baseUrl);
    this.getAllRoute.configureEndPoints(baseUrl);
    this.postStoreRoute.configureEndPoints(baseUrl);
    this.deleteByIdRoute.configureEndPoints(baseUrl);
    this.putByIdRoute.configureEndPoints(baseUrl);
  }
}
