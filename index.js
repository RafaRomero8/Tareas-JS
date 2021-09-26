//import './styles.css';

import {Todo} from './classes/todo.js'
import {TodoList} from './classes/todo-listclass.js'
import { traerTodoHTML} from './js/componentes.js'



export  const todoList  = new TodoList()

//const tarea = new Todo('Aprender Front End');
//const tarea2 = new Todo('Otra tarea de Js')
//todoList.nuevoTodo(tarea)
//todoList.nuevoTodo(tarea2)

//console.log(todoList)

//traerTodoHTML(tarea)


//localStorage.setItem('mikey','ABCD123')
//sessionStorage.setItem('mikey','ABCD123')
// setTimeout( () =>{
//     localStorage.removeItem('mikey')

// },1500)


todoList.todos.forEach(todo => traerTodoHTML(todo) ) //se almacena en el localstorage
                     //o tambien forEach(traerTodoHTML )
    
 //const newTodo = new Todo('Aprender JScript')
// todoList.nuevoTodo(newTodo)
//todoList.todos[0].imprimirClase()

//newTodo.imprimirClase() //imprime el objeto y su respectivo id

console.log('todos',todoList.todos)