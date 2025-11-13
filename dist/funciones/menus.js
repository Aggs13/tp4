"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu_principal = menu_principal;
const listTareas_1 = require("../clases/listTareas");
const Tarea_1 = require("../clases/Tarea");
// @ts-ignore
const promptSync = require("prompt-sync");
const prompt = promptSync();
function menu_principal() {
    let op;
    const tareas = new listTareas_1.lisTareas();
    const t1 = new Tarea_1.Tarea(tareas.lisTareas.length, "tp1", "desc", "pendiente");
    const t2 = new Tarea_1.Tarea(tareas.lisTareas.length, "tp2", "desc", "pendiente");
    const t3 = new Tarea_1.Tarea(tareas.lisTareas.length, "tp3", "desc", "pendiente");
    tareas.lisTareas.push(t1);
    tareas.lisTareas.push(t2);
    tareas.lisTareas.push(t3);
    do {
        console.clear;
        console.log("------------------");
        console.log("[1]-Ver tareas");
        console.log("[2]");
        console.log("[3]");
        console.log("[4]");
        console.log("[0]");
        console.log("------------------");
        op = prompt("Elige una opción: ");
        switch (op) {
            case "1":
                console.log(tareas.retornarTareas(tareas));
                break;
        }
    } while (op == "0");
}
