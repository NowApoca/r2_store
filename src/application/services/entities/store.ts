import bcrypt from "bcryptjs";
import { Store, StoreBaseModel } from "../../../data/entities";
import { IStoreRepository } from "../../contracts";
import { RepositoryMongoDB } from "../../../data/db/mongoDB";
import { RepositoryMySQL } from "../../../data/db/mySQL";
import { Credential, StoreInputModel } from "../../domain";
import {
  ServiceResponse,
  IServiceResponse,
  GroupedService,
  IGroupedService,
} from "../../base";

export interface IProductService {
  mongoDB: IStoreRepository;
  mySQL: IStoreRepository;
}

export class ProductService {
  public repos: IProductService = {
    mongoDB: new RepositoryMongoDB(),
    mySQL: new RepositoryMySQL(),
  };

  //Conjunto de servicios bases de datos
  async getAll(params: any): Promise<Array<StoreBaseModel | null> | null> {
    try {
      var promises: Array<Promise<Array<StoreBaseModel | null> | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IStoreRepository>entry[1]).getAll(params))
      );
      let result_promises = await Promise.all(promises);
      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);

        var succeses: Array<
          IServiceResponse<Array<StoreBaseModel | null> | null>
        > = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      //console.log(error);
      return null;
    }
  }

  async getById(id: Number): Promise<StoreBaseModel | null> {
    try {
      var promises: Array<Promise<StoreBaseModel | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IStoreRepository>entry[1]).getById(id))
      );
      let result_promises = await Promise.all(promises);

      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);
        var succeses: Array<IServiceResponse<StoreBaseModel | null>> = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        console.log("r_promoesis: ", result_promises);
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      //console.log(error);
      return null;
    }
  }

  async deleteById(id: Number): Promise<null> {
    try {
      var promises: Array<Promise<null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IStoreRepository>entry[1]).deleteById(id))
      );
      let result_promises = await Promise.all(promises);

      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);
        var succeses: Array<Number> = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(id)
        );
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  async putById(params: any): Promise<null> {
    try {
      var promises: Array<Promise<null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IStoreRepository>entry[1]).putById(params))
      );
      let result_promises = await Promise.all(promises);

      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);
        var succeses: Array<Number> = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(params.id)
        );
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  async postStore(params: any): Promise<null> {
    try {
      var promises: Array<Promise<null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IStoreRepository>entry[1]).postStore(params))
      );
      let result_promises = await Promise.all(promises);

      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);
        var succeses: Array<Number> = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(params.name)
        );
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

}
