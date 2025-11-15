import { AlmacenTareas, } from "../clases/AlmacenTareas";
import { getTareas, nuevaTarea,agregarTareaArray,eliminarTarea,buscTareaId,buscTareaTitulo,
buscTareaEstado,validarDificultad,validarEstado,establecerVencimiento, } from "../funciones/MenejoTareas";
import { Tarea } from "../clases/Tarea";
// @ts-ignore
import * as promptSync from "prompt-sync";
const prompt = promptSync();

const funcionesTarea = new AlmacenTareas();
let arrayTareas = funcionesTarea.list_tareas;

export function menu_principal(){
    let op:string|null;
    
    do {
        limpiarPantalla()
        console.log("------------------");
        console.log("[1]-Ver tareas");
        console.log("[2]-Nueva tarea");
        console.log("[3]-Editar");
        console.log("[4]-Buscar");
        console.log("[5]-Eliminar");
        console.log("[0]-Salir");
        console.log("------------------");
        op = prompt("Elige una opcion: ");
        limpiarPantalla()
        switch(op){
            case"1":
                console.log(getTareas(arrayTareas));
                console.log("Cantidad:", arrayTareas.length);
                prompt("> [enter]-volver");
            break;
                
            case"2":
                menuNuevaTarea(arrayTareas.length);
            break;

            case"3":
            break;

            case"4":
                limpiarPantalla()
                menuBuscTarea()
                prompt("> [enter]-volver");
            break;

            case"5":
            limpiarPantalla()
            arrayTareas = menuElimiarTarea(arrayTareas)
            prompt("> Eliminado!! [enter]-volver");
            break;

            default:
                
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
    let ultimaEdicion:Date =  new Date();

     // Validar dificultad
    console.log("[1] Facil [2] Normal [3] Dificil")
    const opcionDificultad:string = prompt("Dificultad: ")
    const dificultad = validarDificultad(opcionDificultad) || "Pendiente"

    // Validar estado
    console.log("[1] Pendiente","[2] En Proceso", "[3] Cancelado", "[4] Terminado");
    const opcionEstado = prompt("Estado: ")
    const estado = validarEstado(opcionEstado)


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
    limpiarPantalla()
    return eliminarTarea(id,listTareas);
}




function menuBuscTarea(){
    let op:string;
    console.log("Como quiere buscar la tarea?");
    console.log("[1]-ID");
    console.log("[2]-Titulo");
    console.log("[3]-Estado");
    console.log("[4]-Dificultad");
    op = prompt("> ");
    switch (op){
        case"1":
            limpiarPantalla()
            let id = prompt("ID: ");
            console.log(buscTareaId(parseInt(id,),arrayTareas));

        break;

        case"2":
            limpiarPantalla()
            let palabra = prompt("Ingrese el Titulo: ");
            console.log(buscTareaTitulo(palabra,arrayTareas));

        break;

        case"3":
        
            const estados = ["Pendiente","En Proceso", "Cancelado", "Terminado"];
            console.log(estados);

            let estado:string =  prompt("Estado: ") || "Pendiente";
            let estadoOpcion:number = parseInt(estado) ;
            estado = estados[estadoOpcion-1];

            limpiarPantalla()
            console.log(buscTareaEstado(estado,arrayTareas));
            
        break;
    }

}

function limpiarPantalla() {
    process.stdout.write('\x1Bc'); 
}