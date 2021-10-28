import { StoreBaseModel } from "data/entities";
export interface StoreMySQL {
  Name: String;
  PictureId: String;
  Id: String;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
}

export class User {
  public static save() {}
  public static findOne() {}
}
