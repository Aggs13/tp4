import { mostrarTareas_funcion } from "../funciones/MenejoTareas"
export class lisTareas {
    public lisTareas:Tarea[]

    constructor(){
        this.lisTareas = []
    }

    getTareas(){
        mostrarTareas_funcion(this)
    }

}