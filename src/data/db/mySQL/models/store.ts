import { StoreBaseModel } from "data/entities";
export interface StoreMySQL {
  Id: String;
  Name: String;
  Url: string;
  Hosts: string;
  CompanyName: string;
  CompanyAddress: string;
  CompanyPhoneNumber: string;
}

export class User {
  public static save() {}
  public static findOne() {}
}
