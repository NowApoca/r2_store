"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMapperMongoDB = void 0;
const base_1 = require("../../../../application/base");
const models_1 = require("../models");
class StoreMapperMongoDB extends base_1.Mapper {
    mapFrom(param) {
        return {
            id: "",
            name: "",
            url: "",
            hosts: "",
            companyName: "",
            companyAddress: "",
            companyPhoneNumber: "",
        };
    }
    mapTo(param) {
        return new models_1.Store({});
    }
}
exports.StoreMapperMongoDB = StoreMapperMongoDB;
