import { AlmacenTareas } from "../clases/AlmacenTareas"
import { Tarea } from "../clases/Tarea"

export function getTareas(tareas:Tarea[]) {
return tareas.map(t => t);
}

export function nuevaTarea(id:number = 0,titulo: string = "",descripcion: string = "", estado: string = "Pendiente", creacion: Date = new Date(), ultimaEdicion: Date = new Date(),vencimiento: Date = new Date(),dificultad: string = "Facil"){
   const tarea = new Tarea(id,titulo,descripcion,estado,creacion,ultimaEdicion,vencimiento,dificultad);

   return tarea;
}

export function eliminarTarea(id:number,tareas:Tarea[]){
    return tareas.filter(t => t.id != id);

}

export function agregarTareaArray(newTarea:Tarea,lista:Tarea[]){
    return [...lista, newTarea];
}

export function buscTareaId(id:number,tareas:Tarea[]){
    return tareas.filter(t => t.id == id);
}