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
        console.log("[3]-Editar");
        console.log("[4]-Buscar");
        console.log("[5]-Eliminar");
        console.log("[0]-Salir");
        console.log("------------------");
        op = prompt("Elige una opcion: ");
        console.clear();
        switch (op) {
            case "1":
                console.log((0, MenejoTareas_1.getTareas)(arrayTareas));
                break;
            case "2":
                menuNuevaTarea(arrayTareas.length);
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                arrayTareas = menuElimiarTarea(arrayTareas);
                break;
        }
    } while (op != "0");
}
function menuNuevaTarea(id) {
    console.clear();
    let newId = id;
    let titulo = prompt("Titulo: ") || `Tarea[${id}]`;
    let desc = prompt("Descripcion: ");
    let creacion = new Date().toLocaleDateString();
    let ultimaEdicion = new Date();
    let dificultad = prompt("Dificultad: ") || "Facil";
    // Validar estado
    const estados = ["Pendiente", "En Proceso", "Cancelado", "Terminado"];
    console.log(estados);
    let estado = prompt("Estado: ") || "Pendiente";
    let estadoOpcion = parseInt(estado);
    estado = estados[estadoOpcion - 1];
    console.log("En cuantos dias vence? ");
    let dias = prompt("Dias: ") || "10";
    let vencimiento = (0, MenejoTareas_1.establecerVencimiento)(dias, new Date());
    const tarea = (0, MenejoTareas_1.nuevaTarea)(newId, titulo, desc, estado, creacion, ultimaEdicion, vencimiento, dificultad);
    const actualizarListTarea = (0, MenejoTareas_1.agregarTareaArray)(tarea, arrayTareas);
    arrayTareas = actualizarListTarea;
}
function menuElimiarTarea(listTareas) {
    console.log((0, MenejoTareas_1.getTareas)(listTareas));
    console.log("Eliminar");
    let id = prompt("Ingrese el ID: ");
    id = parseInt(id);
    console.clear();
    return (0, MenejoTareas_1.eliminarTarea)(id, listTareas);
}
function menuBuscTarea() {
    let op;
    console.log("Como quiere buscar la tarea?");
    console.log("[1]-ID");
    console.log("[2]-Titulo");
    console.log("[3]-Vencimiento");
    console.log("[3]-Estado");
}
