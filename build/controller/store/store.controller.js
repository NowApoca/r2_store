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
exports.StoreController = void 0;
const getById_1 = require("../../application/services/useCases/store/getById");
const getAll_1 = require("../../application/services/useCases/store/getAll");
class StoreController {
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new getAll_1.getAllUseCase();
            const data = useCase.execute(params);
            return data;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new getById_1.getByIdUseCase();
            const data = useCase.execute(id);
            console.log(data);
            return data;
        });
    }
}
exports.StoreController = StoreController;
