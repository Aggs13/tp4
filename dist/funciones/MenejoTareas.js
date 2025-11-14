"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTareas = getTareas;
exports.nuevaTarea = nuevaTarea;
exports.eliminarTarea = eliminarTarea;
exports.agregarTareaArray = agregarTareaArray;
const Tarea_1 = require("../clases/Tarea");
function getTareas(tareas) {
    return tareas.map(t => t);
}
function nuevaTarea(id = 0, titulo = "", descripcion = "", estado = "Pendiente", creacion = new Date(), ultimaEdicion = new Date(), vencimiento = new Date(), dificultad = "Facil") {
    const tarea = new Tarea_1.Tarea(id, titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad);
    return tarea;
}
function eliminarTarea(id, tareas) {
    return tareas.filter(t => t.id != id);
}
function agregarTareaArray(newTarea, lista) {
    return [...lista, newTarea];
}
