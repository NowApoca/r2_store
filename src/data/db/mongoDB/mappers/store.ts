import { Mapper } from "../../../../application/base";
import { StoreBaseModel } from "../../../entities";
import { Store, StoreMongoDB } from "../models";

export class StoreMapperMongoDB extends Mapper<StoreMongoDB, StoreBaseModel> {
  mapFrom(param: StoreMongoDB): StoreBaseModel {
    return {
      id: "",
      name: "",
      url: "",
      hosts: "",
      companyName: "",
      companyAddress: "",
      companyPhoneNumber: "",
    };
  }
  mapTo(param: StoreBaseModel): StoreMongoDB {
    return new Store({});
  }
}
