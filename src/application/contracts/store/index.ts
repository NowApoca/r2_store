import { StoreBaseModel } from "../../../data/entities";
export interface IStoreRepository {
  getAll(params: any): Promise<Array<StoreBaseModel | null> | null>;
  getById(id: Number): Promise<StoreBaseModel | null>;
  deleteById(id: Number): Promise<null>;
  putById(params: any): Promise<null>;
  postStore(params: any): Promise<null>;
}
