import React from 'react'
import {toast} from "react-toastify";

class AddTodo extends React.Component<{addTodo: any}> {
    state = {
        title: ''
    }

    handleOnChangeInput = (event: any) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClickButton = () => {
        if (!this.state.title) {
            toast.error(`Missing Todo title`)
            return
        }

        const todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <>
                <div className='todo-list-container'>
                    <div className='add-todo'>
                        <input type='text' onChange={(event) => this.handleOnChangeInput(event)}/>
                        <button type='button' onClick={() => this.handleOnClickButton()}>Add</button>
                    </div>
                </div>
            </>
        )
    }
}

export default AddTodo

