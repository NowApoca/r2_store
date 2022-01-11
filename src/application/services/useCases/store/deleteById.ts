import { StoreBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ProductService } from "../../entities/store";

export class deleteByIdUseCase implements UseCase<any, StoreBaseModel | null> {
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(id: any): Promise<StoreBaseModel | null> {
    const result = await this._ProductService.deleteById(parseInt(id));
    return result;
  }
}
