export class Tarea{
    public id:number;
    public titulo:string;
    public descripcion:string;
    public estado:string;
    public creacion:Date;
    public ultimaEdicion:Date;
    public vencimiento:Date;
    public dificultad:string;


    constructor(id?:number,titulo?: string,descripcion?: string, estado?: string, creacion?: Date, ultimaEdicion?: Date,vencimiento?: Date,dificultad?: string){
        this.id = id ?? 0;
        this.titulo = titulo ?? "";
        this.descripcion = descripcion ?? "";
        this.estado = estado ?? "";
        this.creacion = creacion ?? new Date();
        this.ultimaEdicion = ultimaEdicion ?? new Date();
        this.vencimiento = vencimiento ?? new Date();
        this.dificultad = dificultad ?? "";
    }
}