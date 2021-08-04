#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
// `optionsJSON`: associative array. Make sure this is escaped/quoted properly.
var _a = process.argv.slice(2), inputFilePath = _a[0], outputFilePath = _a[1], optionsJSON = _a[2];
var options = (function (json) {
    try {
        return json ? JSON.parse(json) : {};
    }
    catch (e) {
        return {};
    }
})(optionsJSON);
if (outputFilePath) {
    index_1.default.writeAccessibilityData(inputFilePath, outputFilePath, options);
}
else {
    index_1.default.printAccessibilityData(inputFilePath);
}
