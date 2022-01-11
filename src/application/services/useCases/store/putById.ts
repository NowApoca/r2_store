import { StoreBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ProductService } from "../../entities/store";

interface PutById {
    id: any,
    params: any,
}

export class putByIdUseCase implements UseCase<any, StoreBaseModel | null> {
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(params: PutById): Promise<StoreBaseModel | null> {
    const result = await this._ProductService.putById(params);
    return result;
  }
}
