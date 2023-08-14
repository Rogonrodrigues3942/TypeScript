"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circunferencia_1 = require("./circunferencia");
const circunferencia_2 = require("./circunferencia"); //* utilizando o conceito de alias
// import {areaRetangulo} from './retangulo'
const retangulo_1 = __importDefault(require("./retangulo"));
const quadrado_1 = __importDefault(require("./quadrado"));
console.log(`Área da circunferência invocada de maneira padrão: ${(0, circunferencia_1.areaCircunferencia)(10)}`);
console.log(`Área da circunferência invocada com alias: ${(0, circunferencia_2.areaCircunferencia)(20)}`);
console.log(`Área do retângulo utilizando export default: ${(0, retangulo_1.default)(10, 2.5)}`);
console.log(`Área do quadrado sendo invocado com export default e função anônima: ${(0, quadrado_1.default)(10)}`);
