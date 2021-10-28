import { StoreInputModel } from "../../application/domain";

export interface StoreBaseModel {
  Id: string;
  Name: string;
  PictureId: string;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
}

export class Store implements StoreBaseModel {
  public Id: string;
  public Name: string;
  public PictureId: string;

  public CreatedOnUtc: Date;
  public UpdatedOnUtc: Date;

  constructor(data: StoreInputModel) {
    this.Id = data.Id;
    this.Name = data.Name;
    this.PictureId = data.PictureId;
    this.CreatedOnUtc = data.CreatedOnUtc;
    this.UpdatedOnUtc = data.UpdatedOnUtc;
  }
}
