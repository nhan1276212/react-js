import React from 'react'
import './TodoList.scss'
import AddTodo from "./AddTodo";
import {toast} from "react-toastify";

interface Todo {
    id: string;
    title: string;
}
class ToDoList extends React.Component {
    state = {
        todoList: [
            {
                id: 'todo1',
                title: 'Todo 1'
            }, {
                id: 'todo2',
                title: 'Todo 2'
            },
            {
                id: 'todo3',
                title: 'Todo 3'
            }
        ],
        editTodo: {
            id: null,
            title: ''
        }
    }
    addTodo = (todo: any) => {
        this.setState({
            todoList: [...this.state.todoList, todo]
        })

        toast.success("Add todo successfully")
    }

    deleteTodo = (todo: any) => {
        let currentTodoList = this.state.todoList
        currentTodoList = currentTodoList.filter(item => item.id !== todo.id)
        this.setState({
            todoList: currentTodoList
        })

        toast.warning("Delete todo successfully")
    }

    editTodo = (todo: Todo) => {
        let { editTodo, todoList } = this.state;

        const isCheck = editTodo.id === null

        if (!isCheck && editTodo.id === todo.id) {

            let copyTodoList = [...todoList]

            let objIndex = copyTodoList.findIndex((item => item.id === todo.id))

            copyTodoList[objIndex].title = editTodo.title

            this.setState({
                todoList: copyTodoList,
                editTodo: {}
            })
            toast.success("Update todo successfully!")
            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event: any) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        const {todoList, editTodo} = this.state
        // let isCheck = Object.keys(editTodo).length === 0
        const isCheck = editTodo.id === null
        console.log(editTodo.id)
        return (
            <>
                <div className='todo-list-container'>
                    <AddTodo addTodo={this.addTodo} />
                    <div className='todo-list-content'>
                        {todoList && todoList.length > 0 &&
                            todoList.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {
                                            isCheck?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id?
                                                <span>{index + 1} - <input  value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} /></span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                                }
                                            </>

                                        }
                                        <button type='button' onClick={() => this.editTodo(item)}>
                                            {!isCheck && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button type='button' onClick={() => this.deleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ToDoList

