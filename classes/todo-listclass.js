//import { Todo } from "./todo.js"
import { Todo } from "../js/index.js"

export class TodoList {

    constructor(){
        //this.todos = [];//crear un arreglo para ir almacenando
        //this.todos = []; se inicializa abajo en cargarLocalStorage
        this.cargarLocalStorage()
    }

    nuevoTodo(todo){ //recibe una tarea por hacer

        this.todos.push( todo )//insertamos la tarea en el arreglo todos
        this.guardarLocalStorage()
    }

    eliminarTodo(id){//se pasa el id que queremos eliminar

        this.todos = this.todos.filter( todo => todo.id != id)//que sea diferente del id,regresa un nuevo arreglo excluyendo el id y lo almacenamos en this.todo
        this.guardarLocalStorage()//

    }

    marcarCompletado(id){
        for(const todo of this.todos){

            if(todo.id == id){
                todo.completado = !todo.completado
                this.guardarLocalStorage()
                 break;             
            }
        }

    }

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado)
        this.guardarLocalStorage()

    }
    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify( this.todos))//convierteel arreglo de todos a un json


    }
    cargarLocalStorage(){

        // if(localStorage.getItem('todo')){//si existe el todo
            
        //     this.todos =JSON.parse(localStorage.getItem('todo'))//transformarlo a un arreglo
        //        console.log('cargarLocal:',this.todos)

        // }else{
        //      this.todos = []

        // }

         
      this.todos = (localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo')) //crea un arreglo de objetos
        : []


          this.todos = this.todos.map(obj =>Todo.fromJson(obj))//map retorna un nuevo arreglo ,barre c/u de los elemntos que esta dentro de un arreglo
       //simplificado   this.todos = this.todos.map(Todo.fromJson)
    }


}
