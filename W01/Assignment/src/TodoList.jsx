import {TodoItem} from "./TodoItem";


export function TodoList({ todos, toggleItem, deleteItem }) {
    return <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
            return <TodoItem {...todo} key={todo.id} toggleItem={toggleItem} deleteItem={deleteItem} />
        })}
    </ul>

}