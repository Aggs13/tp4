import { AlmacenTareas } from "../clases/AlmacenTareas"
import { Tarea } from "../clases/Tarea"

export function getTareas(tareas:Tarea[]) {
    return tareas.map(t => t);
}

export function nuevaTarea(id:number,titulo: string,descripcion: string, estado: string , creacion: string, ultimaEdicion: Date, vencimiento: string ,dificultad: string){
   const tarea = new Tarea(id,titulo,descripcion,estado,creacion,ultimaEdicion,vencimiento,dificultad);
   return tarea;
}

export function eliminarTarea(id:number,tareas:Tarea[]){
    return tareas.filter(t => t.id != id);

}

export function agregarTareaArray(newTarea:Tarea,lista:Tarea[]){
    return [...lista, newTarea];
}

export function validarDificultad(dificultadOpcion:string){

    const dificultades = ["Facil","Normal","Dificil"];
    const dificultadSelect:number = parseInt(dificultadOpcion);
    return dificultades[dificultadSelect-1];

}


export function validarEstado(estadoOpcion:string){
    const estados = ["Pendiente","En Proceso", "Terminado", "Cancelado"]
    const estadoSelect = parseInt(estadoOpcion);
    return estados[estadoSelect-1];
}

export function establecerVencimiento(dias:string,fecha:Date){
    
    let diasVencimiento:number = parseInt(dias);
    const fechaVencimiento = new Date(fecha.getTime());
    fechaVencimiento.setDate(fechaVencimiento.getDate() + diasVencimiento);
    return fechaVencimiento.toLocaleDateString("es-AR");
}

export function buscTareaId(id:number,tareas:Tarea[]){
    return tareas.filter(t => t.id == id);
}


export function buscTareaTitulo(palabra:string,tareas:Tarea[]){
    const busqueda = palabra.toLowerCase();
    return tareas.filter(t => t.titulo.toLowerCase().includes(busqueda));
 
}

export function buscTareaEstado(estado:string,tareas:Tarea[]){
    const estados = ["Pendiente","En Proceso", "Terminado", "Cancelado"];
    const estadoSelect:string = estados[parseInt(estado) - 1];
    return tareas.filter(t => t.estado == estadoSelect);
}

export function buscTareaDificultar(dificultad:string,tareas:Tarea[]){
    const dificultades = ["Facil","Normal","Dificil"];
    const dificultadSelect:string = dificultades[parseInt(dificultad) - 1]
    return tareas.filter(t => t.dificultad == dificultadSelect)
}


export function editarTarea(tarea:Tarea,tareas:Tarea[],id:number){
    const index:number = tareas.findIndex(t => t.id == id); 
    let copiaTareas = [...tareas];
    copiaTareas[index] = tarea
    return copiaTareas;
}