import { Mapper } from "../../../../application/base";
import { StoreBaseModel } from "../../../entities";
import { StoreMySQL } from "../models";

export class StoreMapperMySQL extends Mapper<StoreMySQL, StoreBaseModel> {
  mapFrom(param: StoreMySQL): StoreBaseModel {
    return {
      id: param.Id.toString(),
      name: param.Name.toString(),
      url: param.Url.toString(),
      hosts: param.Hosts.toString(),
      companyName: param.CompanyName?.toString(),
      companyAddress: param.CompanyAddress?.toString(),
      companyPhoneNumber: param.CompanyPhoneNumber?.toString(),
    };
  }
  mapTo(param: StoreBaseModel): StoreMySQL {
    return {
      Id: param.id.toString(),
      Name: param.name.toString(),
      Url: param.url.toString(),
      Hosts: param.hosts.toString(),
      CompanyName: param.companyName.toString(),
      CompanyAddress: param.companyAddress.toString(),
      CompanyPhoneNumber: param.companyPhoneNumber.toString(),
    };
  }
}
