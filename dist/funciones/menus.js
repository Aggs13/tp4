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
        limpiarPantalla();
        console.log("------------------");
        console.log("[1]-Ver tareas");
        console.log("[2]-Nueva tarea");
        console.log("[3]-Editar");
        console.log("[4]-Buscar");
        console.log("[5]-Eliminar");
        console.log("[0]-Salir");
        console.log("------------------");
        op = prompt("Elige una opcion: ");
        limpiarPantalla();
        switch (op) {
            case "1":
                console.log((0, MenejoTareas_1.getTareas)(arrayTareas));
                console.log("Cantidad:", arrayTareas.length);
                prompt("> [enter]-volver");
                break;
            case "2":
                limpiarPantalla();
                const id = parseInt(crypto.randomUUID().slice(0, 4), 16);
                menuNuevaTarea(id, false);
                break;
            case "3":
                limpiarPantalla();
                console.log((0, MenejoTareas_1.getTareas)(arrayTareas));
                console.log("Editar");
                let idEdit = prompt("Ingrese el ID: ");
                menuNuevaTarea(idEdit, true);
                break;
            case "4":
                limpiarPantalla();
                menuBuscTarea();
                prompt("> [enter]-volver");
                break;
            case "5":
                limpiarPantalla();
                console.log((0, MenejoTareas_1.getTareas)(arrayTareas));
                let idEliminar = prompt("ID Eliminar:");
                idEliminar = parseInt(idEliminar);
                arrayTareas = (0, MenejoTareas_1.eliminarTarea)(idEliminar, arrayTareas);
                prompt("> Eliminado!! [enter]-volver");
                break;
            default:
                limpiarPantalla();
                break;
        }
    } while (op != "0");
}
function menuNuevaTarea(id, edit) {
    const newId = id;
    const titulo = prompt("Titulo: ") || `Tarea[${id}]`;
    const desc = prompt("Descripcion: ");
    const creacion = new Date().toLocaleDateString();
    const ultimaEdicion = new Date();
    // Validar dificultad
    console.log("[1] Facil [2] Normal [3] Dificil");
    const opcionDificultad = prompt("Dificultad: ");
    const dificultad = (0, MenejoTareas_1.validarDificultad)(opcionDificultad) || "Facil";
    // Validar estado
    console.log("[1] Pendiente", "[2] En Proceso", "[3] Cancelado", "[4] Terminado");
    const opcionEstado = prompt("Estado: ");
    const estado = (0, MenejoTareas_1.validarEstado)(opcionEstado) || "Pendiente";
    console.log("En cuantos dias vence? ");
    const dias = prompt("Dias: ") || "10";
    const vencimiento = (0, MenejoTareas_1.establecerVencimiento)(dias, new Date());
    if (edit) {
        // en caso de ser tarea editada
        const tarea = (0, MenejoTareas_1.nuevaTarea)(id, titulo, desc, estado, creacion, ultimaEdicion, vencimiento, dificultad);
        arrayTareas = (0, MenejoTareas_1.editarTarea)(tarea, arrayTareas, id);
    }
    else {
        const tarea = (0, MenejoTareas_1.nuevaTarea)(newId, titulo, desc, estado, creacion, ultimaEdicion, vencimiento, dificultad);
        arrayTareas = (0, MenejoTareas_1.agregarTareaArray)(tarea, arrayTareas);
    }
}
function menuBuscTarea() {
    let op;
    console.log("Como quiere buscar la tarea?");
    console.log("[1]-ID");
    console.log("[2]-Titulo");
    console.log("[3]-Estado");
    console.log("[4]-Dificultad");
    op = prompt("> ");
    switch (op) {
        case "1":
            limpiarPantalla();
            let id = prompt("ID: ");
            console.log((0, MenejoTareas_1.buscTareaId)(parseInt(id), arrayTareas));
            break;
        case "2":
            limpiarPantalla();
            let palabra = prompt("Ingrese el Titulo: ");
            console.log((0, MenejoTareas_1.buscTareaTitulo)(palabra, arrayTareas));
            break;
        case "3":
            limpiarPantalla();
            console.log("[1] Pendiente [2] En Proceso [3] Terminado [4] Cancelado");
            const estado = prompt("Estado: ") || "1";
            console.log((0, MenejoTareas_1.buscTareaEstado)(estado, arrayTareas));
            break;
        case "4":
            limpiarPantalla();
            console.log("[1] Facil [2] Normal [3] Dificil");
            const dificultad = prompt("Dificultad: ") || "1";
            console.log((0, MenejoTareas_1.buscTareaDificultar)(dificultad, arrayTareas));
            break;
    }
}
function limpiarPantalla() {
    process.stdout.write('\x1Bc');
}
