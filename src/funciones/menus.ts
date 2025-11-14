import { AlmacenTareas, } from "../clases/AlmacenTareas";
import { getTareas, nuevaTarea,agregarTareaArray,eliminarTarea,establecerVencimiento } from "../funciones/MenejoTareas";
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
        console.log("[3]-Editar");
        console.log("[4]-Buscar");
        console.log("[5]-Eliminar");
        console.log("[0]-Salir");
        console.log("------------------");
        op = prompt("Elige una opcion: ");
        console.clear()
        switch(op){
            case"1":
                console.log(getTareas(arrayTareas));
            break;
                
            case"2":
                menuNuevaTarea(arrayTareas.length);
            break;

            case"3":
            break;

            case"4":
            break;

            case"5":
            arrayTareas = menuElimiarTarea(arrayTareas)
            break;

            
        }
    } while (op != "0");
}


export function menuNuevaTarea(id:number){
    console.clear();

    let newId:number = id;
    let titulo:string = prompt("Titulo: ") || `Tarea[${id}]`;
    let desc:string =  prompt("Descripcion: ");
    let creacion:string =  new Date().toLocaleDateString();
    let ultimaEdicion:Date =   new Date();
    let dificultad:string =  prompt("Dificultad: ") || "Facil";

    // Validar estado
    const estados = ["Pendiente","En Proceso", "Cancelado", "Terminado"]
    console.log(estados)

    let estado:string =  prompt("Estado: ") || "Pendiente";
    let estadoOpcion:number = parseInt(estado) 
    estado = estados[estadoOpcion-1]

    console.log("En cuantos dias vence? ");
    let dias:string =  prompt("Dias: ") || "10";
    let vencimiento:string = establecerVencimiento(dias,new Date())
    
    
    const tarea = nuevaTarea(newId,titulo,desc,estado,creacion,ultimaEdicion,vencimiento,dificultad);
    const actualizarListTarea = agregarTareaArray(tarea,arrayTareas);
    arrayTareas = actualizarListTarea;
}

function menuElimiarTarea(listTareas:Tarea[]){
    console.log(getTareas(listTareas));
    console.log("Eliminar");
    let id = prompt("Ingrese el ID: ");
    id = parseInt(id);
    console.clear();
    return eliminarTarea(id,listTareas)
}


function menuBuscTarea(){
    let op:string
    console.log("Como quiere buscar la tarea?");
    console.log("[1]-ID");
    console.log("[2]-Titulo");
    console.log("[3]-Vencimiento");
    console.log("[3]-Estado");

}

