import { almacenTareas } from "../clases/listTareas"
import { Tarea } from "../clases/Tarea"

export function getTareas(tareas:almacenTareas) {
return tareas.lisTareas.map(t => t)
}

export function nuevaTarea(id:number = 0,titulo: string = "",descripcion: string = "", estado: string = "Pendiente", creacion: Date = new Date(), ultimaEdicion: Date = new Date(),vencimiento: Date = new Date(),dificultad: string = "Facil"){
   const tarea = new Tarea(id,titulo,descripcion,estado,creacion,ultimaEdicion,vencimiento,dificultad)
   return tarea
}

export function eliminarTarea(id:number,tareas:almacenTareas){
    const tareasRestantes =  tareas.lisTareas.filter(t => t.id != id).map
    return tareasRestantes
}

