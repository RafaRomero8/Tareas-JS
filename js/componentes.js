
//referencias en el HTML

//import {Todo} from '../classe'

import {Todo} from './index.js'
import { todoList } from '../index.js'
//import { TodoList } from '../classes/todo-listclass.js'

const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const btnBorrar = document.querySelector('.clear-completed')
const ulFiltros = document.querySelector('.filters')
const anchorfiltros = document.querySelectorAll('.filtro')//seleccionar filtros por el id


export const traerTodoHTML = (todo) =>{

    const htmlTodo = ` <li class="${(todo.completado) ? 'completed':'' }" data-id="${todo.id}">
     <div class="view">
          <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked':'' }>
          <label>${todo.tarea}</label>
          <button class="destroy"></button>
      </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div')
    div.innerHTML = htmlTodo

    divTodoList.append(div.firstElementChild)

    return div.firstElementChild
}

//Eventos
txtInput.addEventListener('keyup',(event) =>{
        //ele evento que vamos estar escuchando(keyup) y cuando dispare la tecla creara la funcion y 
        //le pasasmos el parametro event que nos indica que tecla es la que preciono ell usuario    
 if (event.keyCode === 13 && txtInput.value.length > 0) {//si event.keyCode es exactamente igual  a 13 el usuario presionó enter
    //validar para que el usuarioo no inserte caracteres vacios(&& txtInput.value.length > 0)
     console.log(txtInput.value)
    const nuevoTodo = new Todo(txtInput.value)
    todoList.nuevoTodo(nuevoTodo);//agregarlo a nuestro arreglo

    traerTodoHTML(nuevoTodo)//para que cree un componente con forme agreguemos tareas
    txtInput.value = ''//para borrar lo que se puso en la entrada cuando escribimos
 }

})

divTodoList.addEventListener('click',(event)=>{

   // console.log('click')
   // console.log(event.target.localName)

    const nombreElemento = event.target.localName//para ver si hayy un input,label,button
    const todoElemento   = event.target.parentElement.parentElement
    const todoId         = todoElemento.getAttribute('data-id')

    //console.log(todoElemento)
    //console.log(todoId)
    if (nombreElemento.includes('input')) {//si el nombre del elemnto incluye algo llamado input
        
        todoList.marcarCompletado(todoId)
        todoElemento.classList.toggle('completed')
    } else if(nombreElemento.includes('button')){

        todoList.eliminarTodo(todoId)
        divTodoList.removeChild(todoElemento)
    }

    //console.log(todoList)
})

btnBorrar.addEventListener('click', () =>{

    todoList. eliminarCompletados()
    for(let i = divTodoList.children.length-1;i >= 0;i--){//para que empiese en la ultima posicion(ir borrando de abajo hacia arriba)
        const elemento = divTodoList.children[i]

        if(elemento.classList.contains('completed')){
          divTodoList.removeChild(elemento)
            
        }

    }
 })

 ulFiltros.addEventListener('click',(event) =>{

    //console.log(event.target.text)
    const filtro = event.target.text//para saber donde se le de click
    if(!filtro)
    {return}//si el filtro es diferente tiene algo entonce return

 //para borrar la clase, se necesita hacer un barrido
 anchorfiltros.forEach(elem => elem.classList.remove('selected'))//

 console.log( event.target)

    for(const elemento of divTodoList.children){

      // console.log(elemento)
        //cada ves que haacemos clik en uno de los elementoslo que se debe hacer es quitar la clase hident del css 
        elemento.classList.remove('hidden')
        const completado = elemento.classList.contains('completed')//preguntar si la tarea esta registada o completada
        switch(filtro){//se utiliza un switch para que al dar clik en el boton de completado,todos y pendientes se quiten o no

            case 'Pendientes':
                if(completado){//todos los elementos se le agregan la classe hiden si estan completados
                    elemento.classList.add('hidden')
                }
                break
            case 'Completados'://si no es esta completado se le agrega la clase hiden
                    if(!completado){
                        elemento.classList.add('hidden')
                    }
                    break    

        }
    }


         
 })