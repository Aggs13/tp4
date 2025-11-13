"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lisTareas = void 0;
const MenejoTareas_1 = require("../funciones/MenejoTareas");
class lisTareas {
    constructor() {
        this.lisTareas = [];
    }
    retornarTareas(tareas) {
        return (0, MenejoTareas_1.getTareas)(tareas);
    }
}
exports.lisTareas = lisTareas;
