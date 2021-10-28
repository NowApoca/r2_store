import { Mapper } from "../../../../application/base";
import { StoreBaseModel } from "../../../entities";
import { StoreMySQL } from "../models";

export class StoreMapperMySQL extends Mapper<StoreMySQL, StoreBaseModel> {
  mapFrom(param: StoreMySQL): StoreBaseModel {
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      PictureId: param.PictureId.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc,
    };
  }
  mapTo(param: StoreBaseModel): StoreMySQL {
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      PictureId: param.PictureId.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc,
    };
  }
}
