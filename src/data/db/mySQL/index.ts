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
        params === 'undefined'
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
      console.log(entity);
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
      
    }
    return null;
  };

  async postStore(params: any){
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: `INSERT INTO netamx.Store (
          name,
          url,
          ssl_enabled,
          hosts,
          default_language_id,
          display_order,
          company_name,
          company_address,
          company_phone_number
        ) VALUES (
          '${params.name}',
          '${params.url}',
          '${params.sslEnabled}',
          '${params.hosts}',
          '${params.defaultLanguageId}',
          '${params.displayOrder}',
          '${params.companyName}',
          '${params.companyAddress}',
          '${params.companyPhoneNumber}',
        );`,
      });
    } catch (error) {
      
    }
    return null;
  }
}
