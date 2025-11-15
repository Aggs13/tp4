import { AlmacenTareas, } from "../clases/AlmacenTareas";
import { getTareas, nuevaTarea,agregarTareaArray,eliminarTarea,buscTareaId,buscTareaTitulo,
buscTareaEstado,validarDificultad,validarEstado,establecerVencimiento,editarTarea } from "../funciones/MenejoTareas";
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
                const id:number = parseInt(crypto.randomUUID().slice(0, 4), 16);
                menuNuevaTarea(id,false);
            break;

            case"3":
                limpiarPantalla()
                console.log(getTareas(arrayTareas));

                console.log("Editar");
                let idEdit = prompt("Ingrese el ID: ");
                menuNuevaTarea(idEdit,true)
            break;

            case"4":
                limpiarPantalla()
                menuBuscTarea()
                prompt("> [enter]-volver");
            break;

            case"5":
            limpiarPantalla()
            console.log(getTareas(arrayTareas));
            arrayTareas = menuElimiarTarea(arrayTareas)
            prompt("> Eliminado!! [enter]-volver");
            break;

            default:
                
            break;
        }
    } while (op != "0");
}




export function menuNuevaTarea(id:number,edit:boolean){
    console.clear();

    const newId:number = id;
    const titulo:string = prompt("Titulo: ") || `Tarea[${id}]`;
    const desc:string =  prompt("Descripcion: ");
    const creacion:string =  new Date().toLocaleDateString();
    const ultimaEdicion:Date =  new Date();

     // Validar dificultad
    console.log("[1] Facil [2] Normal [3] Dificil");
    const opcionDificultad:string = prompt("Dificultad: ");
    const dificultad = validarDificultad(opcionDificultad) || "Facil";

    // Validar estado
    console.log("[1] Pendiente","[2] En Proceso", "[3] Cancelado", "[4] Terminado");
    const opcionEstado = prompt("Estado: ")
    const estado = validarEstado(opcionEstado) || "Pendiente";


    console.log("En cuantos dias vence? ");
    const dias:string =  prompt("Dias: ") || "10";
    const vencimiento:string = establecerVencimiento(dias,new Date());

    if(edit){
        // en caso de ser tarea editada
        const tarea = nuevaTarea(id,titulo,desc,estado,creacion,ultimaEdicion,vencimiento,dificultad);
        const actualizarListTarea = editarTarea(tarea,arrayTareas,id)
        arrayTareas = actualizarListTarea;
        return;
    }else{
        const tarea = nuevaTarea(newId,titulo,desc,estado,creacion,ultimaEdicion,vencimiento,dificultad);
        const actualizarListTarea = agregarTareaArray(tarea,arrayTareas);
        arrayTareas = actualizarListTarea;
    }



}


function menuElimiarTarea(listTareas:Tarea[]){
    let id = prompt("ID Eliminar:")
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