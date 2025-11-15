export class Tarea{
    public id:number;
    public titulo:string;
    public descripcion:string;
    public estado:string;
    public dificultad:string;
    public creacion:string;
    public ultimaEdicion:Date;
    public vencimiento:string;
    


    constructor(id?:number,titulo?: string,descripcion?: string, estado?: string, creacion?: string, ultimaEdicion?: Date,vencimiento?: string,dificultad?: string){
        this.id = id ?? 0;
        this.titulo = titulo ?? "";
        this.descripcion = descripcion ?? "";
        this.estado = estado ?? "";
        this.creacion = creacion ?? "";
        this.ultimaEdicion = ultimaEdicion ?? new Date();
        this.vencimiento = vencimiento ?? "" ;
        this.dificultad = dificultad ?? "";
    }

}