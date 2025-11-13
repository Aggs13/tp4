"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
class Tarea {
    constructor(id, titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad) {
        this.id = id !== null && id !== void 0 ? id : 0;
        this.titulo = titulo !== null && titulo !== void 0 ? titulo : "";
        this.descripcion = descripcion !== null && descripcion !== void 0 ? descripcion : "";
        this.estado = estado !== null && estado !== void 0 ? estado : "";
        this.creacion = creacion !== null && creacion !== void 0 ? creacion : new Date();
        this.ultimaEdicion = ultimaEdicion !== null && ultimaEdicion !== void 0 ? ultimaEdicion : new Date();
        this.vencimiento = vencimiento !== null && vencimiento !== void 0 ? vencimiento : new Date();
        this.dificultad = dificultad !== null && dificultad !== void 0 ? dificultad : "";
    }
}
exports.Tarea = Tarea;
