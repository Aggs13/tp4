"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTareas = getTareas;
exports.nuevaTarea = nuevaTarea;
exports.eliminarTarea = eliminarTarea;
exports.agregarTareaArray = agregarTareaArray;
exports.validarDificultad = validarDificultad;
exports.validarEstado = validarEstado;
exports.establecerVencimiento = establecerVencimiento;
exports.buscTareaId = buscTareaId;
exports.buscTareaTitulo = buscTareaTitulo;
exports.buscTareaEstado = buscTareaEstado;
exports.editarTarea = editarTarea;
const Tarea_1 = require("../clases/Tarea");
function getTareas(tareas) {
    return tareas.map(t => t);
}
function nuevaTarea(id, titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad) {
    const tarea = new Tarea_1.Tarea(id, titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad);
    return tarea;
}
function eliminarTarea(id, tareas) {
    return tareas.filter(t => t.id != id);
}
function agregarTareaArray(newTarea, lista) {
    return [...lista, newTarea];
}
function validarDificultad(dificultadOpcion) {
    const dificultades = ["Facil", "Normal", "Dificil"];
    const dificultadSelect = parseInt(dificultadOpcion);
    return dificultades[dificultadSelect - 1];
}
function validarEstado(estadoOpcion) {
    const estados = ["Pendiente", "En Proceso", "Terminado", "Cancelado"];
    const estadoSelect = parseInt(estadoOpcion);
    return estados[estadoSelect - 1];
}
function establecerVencimiento(dias, fecha) {
    let diasVencimiento = parseInt(dias);
    const fechaVencimiento = new Date(fecha.getTime());
    fechaVencimiento.setDate(fechaVencimiento.getDate() + diasVencimiento);
    return fechaVencimiento.toLocaleDateString("es-AR");
}
function buscTareaId(id, tareas) {
    return tareas.filter(t => t.id == id);
}
function buscTareaTitulo(palabra, tareas) {
    const busqueda = palabra.toLowerCase();
    return tareas.filter(t => t.titulo.toLowerCase().includes(busqueda));
}
function buscTareaEstado(estado, tareas) {
    return tareas.filter(t => t.estado == estado);
}
function editarTarea(tarea, tareas, id) {
    const index = tareas.findIndex(t => t.id == id);
    tareas[index] = tarea;
    return tareas;
}
