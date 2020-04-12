
import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');
// const tarea2 = new Todo('Comprar un Unicornio');

// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);

console.log( todoList );

todoList.todos.forEach( crearTodoHtml);

// tarea.completado = true;

//  crearTodoHtml( tarea );

// Uso de localStorage y sessionStorage es igual
//  localStorage.setItem('mi-key', 'ABC123');
 
//  setTimeout( () => {
//      localStorage.removeItem('my-key');
//  })