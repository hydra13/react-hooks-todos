import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const url = `https://${config.firebaseDbName}.firebaseio.com/todos.json`;

const Todo = props => {
    const [ todoName, setTodoName ] = useState("");
    const [ todoList, setTodoList ] = useState([]);

    useEffect(() => {
        axios.get(url).then(result => {
            const todos = []
            for (const key in result.data) {
                todos.push( {id: key, name: result.data[key].name} )
            }
            setTodoList(todos);
        })
    }, [])

    const todos = todoList ? todoList.map(todo => <li key={todo.id}>{todo.name}</li>) : [];

    const onChangeTodoName = (event) => {
        setTodoName(event.target.value);
    }

    const onClickAddButton = () => {
        axios.post(url, { name: todoName }).then(result => result.data.name).then(id => {
            setTodoList( [ ...todoList, {id, name: todoName} ] );
        })
        setTodoName('');
    }

    return (
        <>
            <input type="text" placeholder="Todo" value={todoName} onChange={onChangeTodoName} />
            <button onClick={onClickAddButton}>Add to list</button>
            <ul>
                {todos}
            </ul>
        </>
    )
}

export default Todo;