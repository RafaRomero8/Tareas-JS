export class Todo {
    static fromJson({id,tarea,completado,creado}){//para que reciba un objeto se hace una desestructuración
        const temTodo  = new Todo(tarea)//crea una nueva instancia
  
        temTodo.id         = id
        temTodo.completado = completado
        temTodo.creado     = creado
     //se regresa la instancia
             return temTodo
      }
    constructor(tarea){ //recibe el parametro ,la tarea que queramos hacer

        this.tarea = tarea
        this.id = new Date().getTime(); //crea un objeto con la fecha y hora actual(al poner getTime se obtiene la representación actual de la hora actual)
        this.completado = false
        this.creado = new Date()

    }

    imprimirClase(){

        console.log(`${this.tarea} - ${this.id}`)
    }
}