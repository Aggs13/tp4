import { lisTareas, } from "../clases/listTareas";
import { getTareas } from "../funciones/MenejoTareas";
import { Tarea } from "../clases/Tarea";
// @ts-ignore
import * as promptSync from "prompt-sync";
const prompt = promptSync();

export function menu_principal(){
    let op:string|null
    const tareas = new lisTareas()
    const t1 = new Tarea(tareas.lisTareas.length,"tp1","desc","pendiente" )
    const t2 = new Tarea(tareas.lisTareas.length,"tp2","desc","pendiente" )
    const t3 = new Tarea(tareas.lisTareas.length,"tp3","desc","pendiente" )

    tareas.lisTareas.push(t1)
    tareas.lisTareas.push(t2)
    tareas.lisTareas.push(t3)
    do {
        console.clear
        console.log("------------------")
        console.log("[1]-Ver tareas")
        console.log("[2]")
        console.log("[3]")
        console.log("[4]")
        console.log("[0]")
        console.log("------------------")
        op = prompt("Elige una opción: ");
        switch(op){
            case"1":
                console.log(tareas.retornarTareas(tareas));
            break;
        }
    } while (op == "0");
}