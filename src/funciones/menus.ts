import { AlmacenTareas, } from "../clases/AlmacenTareas";
import { getTareas, nuevaTarea,agregarTareaArray,eliminarTarea } from "../funciones/MenejoTareas";
import { Tarea } from "../clases/Tarea";
// @ts-ignore
import * as promptSync from "prompt-sync";
const prompt = promptSync();

const funcionesTarea = new AlmacenTareas();
let arrayTareas = funcionesTarea.list_tareas;

export function menu_principal(){
    let op:string|null;
    
    do {
        
        console.log("------------------");
        console.log("[1]-Ver tareas");
        console.log("[2]-Nueva tarea");
        console.log("[3]-Buscar");
        console.log("[4]-Eliminar");
        console.log("[0]");
        console.log("------------------");
        op = prompt("Elige una opción: ");
        console.clear()
        switch(op){
            case"1":
                console.log(getTareas(arrayTareas));
            break;
                
            case"2":
                menuNuevaTarea(funcionesTarea.list_tareas.length);
            break;

            case"3":
            break;

            case"4":
            arrayTareas = menuElimiarTarea(arrayTareas)
            break;
        }
    } while (op != "0");
}


export function menuNuevaTarea(id:number){
    console.clear();

    let newId:number = id;
    let titulo:string = prompt("Titulo: ");
    let desc:string =  prompt("Descripcion: ");
    let estado:string =  prompt("Estado: ");
    let creacion:Date =  new Date();
    let ultimaEdicion:Date =   new Date();
    let vencimiento:Date =   new Date();
    let dificultad:string =  prompt("Dificultad: ");

    const tarea = nuevaTarea(newId,titulo,desc,estado,creacion,ultimaEdicion,vencimiento,dificultad);
    const actualizarListTarea = agregarTareaArray(tarea,arrayTareas);
    arrayTareas = actualizarListTarea;
}

function menuElimiarTarea(listTareas:Tarea[]){
    console.log(getTareas(listTareas));
    console.log("Eliminar");
    let id = prompt("Ingrese el ID: ");
    id = parseInt(id);

    return eliminarTarea(id,listTareas)
}