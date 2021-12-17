import { StoreBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { ProductService } from "../../entities/store";

export class getAllUseCase
  implements UseCase<any, Array<StoreBaseModel | null> | null>
{
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(
    params: any
  ): Promise<Array<StoreBaseModel | null> | null> {
    const result = await this._ProductService.getAll(params);
    return result;
  }
}
