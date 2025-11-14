"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu_principal = menu_principal;
exports.menuNuevaTarea = menuNuevaTarea;
const AlmacenTareas_1 = require("../clases/AlmacenTareas");
const MenejoTareas_1 = require("../funciones/MenejoTareas");
// @ts-ignore
const promptSync = require("prompt-sync");
const prompt = promptSync();
const funcionesTarea = new AlmacenTareas_1.AlmacenTareas();
let arrayTareas = funcionesTarea.list_tareas;
function menu_principal() {
    let op;
    do {
        console.log("------------------");
        console.log("[1]-Ver tareas");
        console.log("[2]-Nueva tarea");
        console.log("[3]-Buscar");
        console.log("[4]-Eliminar");
        console.log("[0]");
        console.log("------------------");
        op = prompt("Elige una opción: ");
        console.clear();
        switch (op) {
            case "1":
                console.log((0, MenejoTareas_1.getTareas)(arrayTareas));
                break;
            case "2":
                menuNuevaTarea(funcionesTarea.list_tareas.length);
                break;
            case "3":
                break;
            case "4":
                arrayTareas = menuElimiarTarea(arrayTareas);
                break;
        }
    } while (op != "0");
}
function menuNuevaTarea(id) {
    console.clear();
    let newId = id;
    let titulo = prompt("Titulo: ");
    let desc = prompt("Descripcion: ");
    let estado = prompt("Estado: ");
    let creacion = new Date();
    let ultimaEdicion = new Date();
    let vencimiento = new Date();
    let dificultad = prompt("Dificultad: ");
    const tarea = (0, MenejoTareas_1.nuevaTarea)(newId, titulo, desc, estado, creacion, ultimaEdicion, vencimiento, dificultad);
    const actualizarListTarea = (0, MenejoTareas_1.agregarTareaArray)(tarea, arrayTareas);
    arrayTareas = actualizarListTarea;
}
function menuElimiarTarea(listTareas) {
    console.log((0, MenejoTareas_1.getTareas)(listTareas));
    console.log("Eliminar");
    let id = prompt("Ingrese el ID: ");
    id = parseInt(id);
    return (0, MenejoTareas_1.eliminarTarea)(id, listTareas);
}
