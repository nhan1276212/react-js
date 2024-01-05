import {ChangeEvent, useEffect, useState} from 'react'
import Todo from "./Todo";
const FunctionComponent = () => {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Todo 1'
        },
        {
            id: 2,
            title: 'Todo 2'
        }

    ])

    useEffect(() => {
        console.log(213)
    })
    const handleClickMe = () => {
        const id = Math.floor(Math.random() * 16);
        const todo = {
            id: id,
            title: `Todo ${id}`
        }
        setTodos([...todos, todo])
    }

    const handleDeleteTodo = (todo: any) => {
        const newTodos = todos.filter(item => item.id !== todo.id)
        setTodos(newTodos)
    }
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    return(
    <>
        <div>{name}</div>
        <input type='text' value={name} onChange={(event) => handleOnChange(event)}/>
        <button onClick={() => handleClickMe()}>Click me!</button>
        <div className={'todos'}>
            {
                todos.map(todo => {
                    return (<Todo todo={todo} key={todo.id} deleteTodo={handleDeleteTodo}></Todo>)
                })
            }
        </div>
    </>
    )
}

export default FunctionComponent
