import { IStoreRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain/credential";
import { StoreBaseModel } from "data/entities";
import { StoreMapperMySQL } from "./mappers";
import { Connection } from "../../../connections/connection";

export class RepositoryMySQL implements IStoreRepository {
  private userMapper: StoreMapperMySQL;
  constructor() {
    this.userMapper = new StoreMapperMySQL();
  }

  async getAll(): Promise<Array<StoreBaseModel | null> | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query(
        "SELECT * from netamx.Store;"
      );
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let result = data.map<StoreBaseModel>((r) => {
        return new StoreMapperMySQL().mapFrom(r as any);
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getById(id: any): Promise<StoreBaseModel | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "SELECT * from netamx.Store where id=" + id + ";",
      });
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let entity = new StoreMapperMySQL().mapFrom(data[0] as any);
      console.log(entity);
      return entity;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
