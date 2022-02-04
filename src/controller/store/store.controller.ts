import { getByIdUseCase } from "../../application/services/useCases/store/getById";
import { getAllUseCase } from "../../application/services/useCases/store/getAll";
import { deleteByIdUseCase } from "../../application/services/useCases/store/deleteById";
import { putByIdUseCase } from "../../application/services/useCases/store/putById";
import { postStoreUseCase } from "../../application/services/useCases/store/postStore";
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

  async deleteById(id: any): Promise<null> {
    const useCase = new deleteByIdUseCase();
    useCase.execute(id);
    return null;
  }

  async putById(id: any, params: any): Promise<null> {
    const useCase = new putByIdUseCase();
    params.id = id;
    useCase.execute(params);
    return null;
  }

  async postStore(params: any): Promise<StoreBaseModel | null> {
    const useCase = new postStoreUseCase();
    const data = useCase.execute(params);
    return data;
  }
}
