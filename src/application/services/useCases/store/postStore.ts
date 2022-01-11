import { StoreBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ProductService } from "../../entities/store";

export class putByIdUseCase implements UseCase<any, StoreBaseModel | null> {
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(params: any): Promise<StoreBaseModel | null> {
    const result = await this._ProductService.postStore(params);
    return result;
  }
}
