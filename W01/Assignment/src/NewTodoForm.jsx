import {useState} from "react";


export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState(""); // The value in the form text input that will become a new array item

    // Will handle submission of the form
    function handleSubmit(event) {
        // Prevents page refresh
        event.preventDefault();
        onSubmit(newItem);
        setNewItem("");
    }


    return <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
            <label htmlFor='item'>New Item</label>
            <input
                value={newItem}
                onChange={event => setNewItem(event.target.value)}
                type='text'
                id='item'
            />
        </div>
        <button className='btn'>Add</button>
    </form>
}