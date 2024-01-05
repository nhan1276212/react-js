const Todo = (props: any) => {
    const todo = props.todo
    const deleteTodo = (todo: any) => {
        props.deleteTodo(todo)
    }
    return (<div className={'todo-child'}>{todo.id} - {todo.title} <span onClick={() => deleteTodo(todo)}>x</span></div>)
}

export default Todo
