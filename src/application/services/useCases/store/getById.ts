import { StoreBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { ProductService } from "../../entities/store";

export class getByIdUseCase implements UseCase<any, StoreBaseModel | null> {
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(params: any): Promise<StoreBaseModel | null> {
    const result = await this._ProductService.getById(parseInt(params));
    console.log("useCase: ", result);
    return result;
  }
}
