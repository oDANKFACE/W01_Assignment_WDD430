
export function TodoItem({ completed, id, title, toggleItem, deleteItem }) {
    return <li>
        <input type='checkbox'
               checked={completed}
            onChange={e => toggleItem(id, e.target.checked)}
        />
        <label>{title}</label>
        <button className='btn btn-danger'
            onClick={() => deleteItem(id)}
        >Delete</button>
    </li>

}