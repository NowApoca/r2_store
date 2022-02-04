import { StoreBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ProductService } from "../../entities/store";

export class postStoreUseCase implements UseCase<any, StoreBaseModel | null> {
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(params: any): Promise<StoreBaseModel | null> {
    console.log(`EXECUTE postStoreUseCase WITH PARTAMS ` + params)
    const result = await this._ProductService.postStore(params);
    return result;
  }
}
