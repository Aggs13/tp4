import { AlmacenTareas } from "../clases/AlmacenTareas"
import { Tarea } from "../clases/Tarea"

export function getTareas(tareas:Tarea[]) {
return tareas.map(t => t);
}

export function nuevaTarea(id:number = 0,titulo: string = "",descripcion: string = "", estado: string = "Pendiente", creacion: string, ultimaEdicion: Date, vencimiento: string ,dificultad: string = "Facil"){
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

export function establecerVencimiento(dias:string,fecha:Date){
    
    let diasVencimiento:number = parseInt(dias)
    const fechaVencimiento = new Date(fecha.getTime());
    fechaVencimiento.setDate(fechaVencimiento.getDate() + diasVencimiento)
    return fechaVencimiento.toLocaleDateString("es-AR");
}