"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMapperMySQL = void 0;
const base_1 = require("../../../../application/base");
class StoreMapperMySQL extends base_1.Mapper {
    mapFrom(param) {
        var _a, _b, _c;
        return {
            id: param.Id.toString(),
            name: param.Name.toString(),
            url: param.Url.toString(),
            hosts: param.Hosts.toString(),
            companyName: (_a = param.CompanyName) === null || _a === void 0 ? void 0 : _a.toString(),
            companyAddress: (_b = param.CompanyAddress) === null || _b === void 0 ? void 0 : _b.toString(),
            companyPhoneNumber: (_c = param.CompanyPhoneNumber) === null || _c === void 0 ? void 0 : _c.toString(),
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
