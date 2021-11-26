"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMapperMySQL = void 0;
const base_1 = require("../../../../application/base");
class StoreMapperMySQL extends base_1.Mapper {
    mapFrom(param) {
        return {
            id: param.Id.toString(),
            name: param.Name.toString(),
            url: param.Url.toString(),
            hosts: param.Hosts.toString(),
            companyName: param.CompanyName.toString(),
            companyAddress: param.CompanyAddress.toString(),
            companyPhoneNumber: param.CompanyPhoneNumber.toString(),
        };
    }
    mapTo(param) {
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
exports.StoreMapperMySQL = StoreMapperMySQL;
