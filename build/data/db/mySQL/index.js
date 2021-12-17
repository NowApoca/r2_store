"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryMySQL = void 0;
const mappers_1 = require("./mappers");
const connection_1 = require("../../../connections/connection");
class RepositoryMySQL {
    constructor() {
        this.userMapper = new mappers_1.StoreMapperMySQL();
    }
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query(params === undefined
                    ? "SELECT * from netamx.Store;"
                    : "SELECT * from netamx.Store where Url='" + params + "';");
                let data = Object.values(JSON.parse(JSON.stringify(results)));
                let result = data.map((r) => {
                    return new mappers_1.StoreMapperMySQL().mapFrom(r);
                });
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query({
                    sql: "SELECT * from netamx.Store where id=" + id + ";",
                });
                let data = Object.values(JSON.parse(JSON.stringify(results)));
                let entity = new mappers_1.StoreMapperMySQL().mapFrom(data[0]);
                console.log(entity);
                return entity;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.RepositoryMySQL = RepositoryMySQL;
