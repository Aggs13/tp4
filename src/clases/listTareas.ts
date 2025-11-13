import { getTareas,nuevaTarea } from "../funciones/MenejoTareas"
import { Tarea } from "./Tarea"
export class almacenTareas {

    public lisTareas:Tarea[]

    constructor(){
        this.lisTareas = []
    }

    retornarTareas(tareas:lisTareas){
       return getTareas(tareas)
    }

    agregarTarea(){
        this.lisTareas.push()
    }

}