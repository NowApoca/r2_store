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

  async getAll(params: any): Promise<Array<StoreBaseModel | null> | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query(
        params === undefined
          ? "SELECT * from netamx.Store;"
          : "SELECT * from netamx.Store where Hosts='" + params + "';"
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
      console.log(entity, 'ENTITY');
      return entity;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteById(id: Number): Promise<null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "DELETE from netamx.Store where id=" + id + ";",
      });
    } catch (error) {
      throw error;
    }
    return null;
  }

  async putById(params: any){
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: `UPDATE netamx.Store SET name="${params.name}" where id=${params.id};`,
      });
    } catch (error) {
      throw error;
    }
    return null;
  };

  async postStore(params: any){
    try {
      if (Connection.mySQL2Pool == null) return null;
      const now = (new Date()).toISOString();
      const createdDate = now.slice(0, 10) + " " + now.slice(11, 19);
      const query = `INSERT INTO netamx.Store (
        name,
        url,
        hosts,
        companyName,
        companyAddress,
        companyPhoneNumber,
        createdOnUtc
      ) VALUES (
        '${params.name}',
        '${params.url}',
        '${params.hosts}',
        '${params.companyName}',
        '${params.companyAddress}',
        '${params.companyPhoneNumber}',
        '${createdDate}'
      );`
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: query,
      });
    } catch (error) {
      console.log(error, `error IN postStore`)
      throw error;
    }
    return null;
  }
}
