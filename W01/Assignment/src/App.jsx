import {useEffect, useState} from "react";
import {NewTodoForm} from "./NewTodoForm";
import {TodoList} from "./TodoList";


export default function App() {
    const [todoList, setTodoList] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue === null) return[];
        return JSON.parse(localValue);
    }); // The list of submitted items generated from the array
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todoList))
    }, [todoList])

    function toggleItem(id, completed) {
        setTodoList((currentTodos) => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                return todo;
            })

        })
    }

    function addTodoItem(title) {
        // Adds an item to the array, since it changes current array, must pass in callback with current val arg
        setTodoList((currentTodoList) => {
            return [
                // Needs unique ID when returning array of elements, we map <li> elements in the APP return
                ...currentTodoList, { id: crypto.randomUUID(), title, completed: false }
            ];
        })

    }

    function deleteItem(id) {
        setTodoList((currentTodos) => {
            return(currentTodos.filter(item => item.id !== id))
        })
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodoItem}/>
            <h1 className='header'>To-do List</h1>
            <TodoList todos={todoList} toggleItem={toggleItem} deleteItem={deleteItem} />
        </>
    )
}