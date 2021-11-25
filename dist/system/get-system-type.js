"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemType = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSystemType = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/system/type");
};
exports.getSystemType = getSystemType;
