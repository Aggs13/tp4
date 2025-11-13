"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTareas = getTareas;
exports.nuevaTarea = nuevaTarea;
exports.eliminarTarea = eliminarTarea;
const Tarea_1 = require("../clases/Tarea");
function getTareas(tareas) {
    return tareas.lisTareas.map(t => t);
}
function nuevaTarea(id, titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad) {
    const tarea = new Tarea_1.Tarea(id, titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad);
    return tarea;
}
function eliminarTarea(id, tareas) {
    const tareasRestantes = tareas.lisTareas.filter(t => t.id != id).map;
    return tareasRestantes;
}
