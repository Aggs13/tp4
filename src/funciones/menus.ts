import { AlmacenTareas, } from "../clases/AlmacenTareas";
import { getTareas, nuevaTarea,agregarTareaArray,eliminarTarea,buscTareaId,buscTareaTitulo,
buscTareaEstado,validarDificultad,validarEstado,establecerVencimiento,editarTarea,buscTareaDificultar } from "../funciones/MenejoTareas";
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
                limpiarPantalla()
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
                let idEliminar = prompt("ID Eliminar:")
                idEliminar = parseInt(idEliminar);
                arrayTareas = eliminarTarea(idEliminar,arrayTareas)
                prompt("> Eliminado!! [enter]-volver");
            break;

            default:
                limpiarPantalla()
            break;
        }
    } while (op != "0");
}


export function menuNuevaTarea(id:number,edit:boolean){

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
        arrayTareas = editarTarea(tarea,arrayTareas,id);

    }else{
        const tarea = nuevaTarea(newId,titulo,desc,estado,creacion,ultimaEdicion,vencimiento,dificultad);
        arrayTareas = agregarTareaArray(tarea,arrayTareas);

    }



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
        
            limpiarPantalla()
            console.log("[1] Pendiente [2] En Proceso [3] Terminado [4] Cancelado");
            const estado:string =  prompt("Estado: ") || "1";
            console.log(buscTareaEstado(estado,arrayTareas));
            
        break;


        case"4":
            limpiarPantalla()
            console.log("[1] Facil [2] Normal [3] Dificil")
            const dificultad = prompt("Dificultad: ") || "1"
            console.log(buscTareaDificultar(dificultad,arrayTareas))
        break;
    }

}

function limpiarPantalla() {
    process.stdout.write('\x1Bc'); 
}