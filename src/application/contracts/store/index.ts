import { StoreBaseModel } from "../../../data/entities";
export interface IStoreRepository {
  getAll(params: any): Promise<Array<StoreBaseModel | null> | null>;
  getById(id: Number): Promise<StoreBaseModel | null>;
}
