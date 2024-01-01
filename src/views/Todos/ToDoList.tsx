import React from 'react'
import './TodoList.scss'
import AddTodo from "./AddTodo";
import {toast} from "react-toastify";

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
        ]
    }
    addTodo = (todo: any) => {
        this.setState({
            todoList: [...this.state.todoList, todo]
        })

        toast.success("Wow so easy!")
    }

    render() {
        const {todoList} = this.state
        return (
            <>
                <div className='todo-list-container'>
                    <AddTodo addTodo={this.addTodo} />
                    <div className='todo-list-content'>
                        {todoList && todoList.length > 0 &&
                            todoList.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        <span>{index + 1} - {item.title}</span>
                                        <button type='button'>Edit</button>
                                        <button type='button'>Delete</button>
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

