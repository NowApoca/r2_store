import { StoreBaseModel } from "../../../data/entities";
export interface IStoreRepository {
  getAll(): Promise<Array<StoreBaseModel | null> | null>;
  getById(id: Number): Promise<StoreBaseModel | null>;
}
