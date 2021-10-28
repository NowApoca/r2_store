import { IStoreRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain";
import { StoreBaseModel } from "../../entities";
import { StoreMapperMongoDB } from "./mappers";

export class RepositoryMongoDB implements IStoreRepository {
  private static instance: RepositoryMongoDB = new RepositoryMongoDB();
  private userMapper: StoreMapperMongoDB;

  constructor() {
    this.userMapper = new StoreMapperMongoDB();
  }

  async getAll(): Promise<Array<StoreBaseModel | null> | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }

  async getById(params: any): Promise<StoreBaseModel | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }
}
