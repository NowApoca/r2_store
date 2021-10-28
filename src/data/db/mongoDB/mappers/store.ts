import { Mapper } from "../../../../application/base";
import { StoreBaseModel } from "../../../entities";
import { Store, StoreMongoDB } from "../models";

export class StoreMapperMongoDB extends Mapper<StoreMongoDB, StoreBaseModel> {
  mapFrom(param: StoreMongoDB): StoreBaseModel {
    return {
      Id: "",
      Name: "",
      PictureId: "",
      CreatedOnUtc: new Date(),
      UpdatedOnUtc: new Date(),
    };
  }
  mapTo(param: StoreBaseModel): StoreMongoDB {
    return new Store({});
  }
}
