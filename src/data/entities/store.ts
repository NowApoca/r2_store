import { StoreInputModel } from "../../application/domain";

export interface StoreBaseModel {
  id: string;
  name: string;
  url: string;
  hosts: string;
  companyName: string;
  companyAddress: string;
  companyPhoneNumber: string;
}

export class Store implements StoreBaseModel {
  public id: string;
  public name: string;
  public url: string;
  public hosts: string;
  public companyName: string;
  public companyAddress: string;
  public companyPhoneNumber: string;

  constructor(data: StoreInputModel) {
    this.id = data.Id;
    this.name = data.Name;
    this.url = data.Url;
    this.hosts = data.Hosts;
    this.companyName = data.CompanyName;
    this.companyAddress = data.CompanyAddress;
    this.companyPhoneNumber = data.CompanyPhoneNumber;
  }
}
