import { StoreInputModel } from "../../application/domain";
import { getByIdUseCase } from "../../application/services/useCases/store/getById";
import { Token } from "../../token";
import { getAllUseCase } from "../../application/services/useCases/store/getAll";
import { StoreBaseModel } from "data/entities/store";

export class StoreController {
  async getAll(params: any): Promise<Array<StoreBaseModel | null> | null> {
    const useCase = new getAllUseCase();
    const data = useCase.execute(params);
    return data;
  }

  async getById(id: any): Promise<StoreBaseModel | null> {
    const useCase = new getByIdUseCase();
    const data = useCase.execute(id);
    console.log(data);
    return data;
  }
}
