"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor(data) {
        this.id = data.Id;
        this.name = data.Name;
        this.url = data.Url;
        this.hosts = data.Hosts;
        this.companyName = data.CompanyName;
        this.companyAddress = data.CompanyAddress;
        this.companyPhoneNumber = data.CompanyPhoneNumber;
    }
}
exports.Store = Store;
