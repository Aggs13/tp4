"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
class Tarea {
    id;
    titulo;
    descripcion;
    estado;
    creacion;
    ultimaEdicion;
    vencimiento;
    dificultad;
    constructor(id, titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad) {
        this.id = id ?? 0;
        this.titulo = titulo ?? "";
        this.descripcion = descripcion ?? "";
        this.estado = estado ?? "";
        this.creacion = creacion ?? new Date();
        this.ultimaEdicion = ultimaEdicion ?? new Date();
        this.vencimiento = vencimiento ?? new Date();
        this.dificultad = dificultad ?? "";
    }
}
exports.Tarea = Tarea;
