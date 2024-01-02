import React from 'react'
import ChildComponent from "./ChildComponent"
import MyFunctionComponent from "./MyFunctionComponent"
import FormComponent from "./FormComponent"
import Color from "./Color/Color";

class MyComponent extends React.Component {
    state = {
        name: 'Nhan Nguyen',
        year: 1994,
        username: '',
        password: '',
        jobs: [
            {
                name: 'react',
                sl: 500
            },
            {
                name: 'vue',
                sl: 1000
            },
            {
                name: 'angular',
                sl: 300
            }
        ]
    }

    handleOnChangeInput = (event: any) : void => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnClick = () : void => {
        alert('click me')
    }

    handleChangeUsername = (event: any) : void => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangePassword = (event: any) : void => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event: any) : void => {
        event.preventDefault()
        console.log('State: ', this.state)
    }

    addJob = (job: any) => {
        console.log(job)
        this.setState({
            jobs: [...this.state.jobs, job]
        })
    }

    deleteJob = (job: any) => {
        let currentJob = this.state.jobs
        currentJob = currentJob.filter(item => item.name !== job.name)
        this.setState({
            jobs: currentJob
        })
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('component did update', prevProps, prevState)
    }

    componentDidMount() {
        console.log('component did mount')
    }

    render() {
        return(
            <>
                <input value={this.state.name} onChange={(event) => this.handleOnChangeInput(event)}/>
                <div>Hello {this.state.name}</div>
                <button onClick={() => this.handleOnClick()}>click me</button>
                <form>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname"
                               onChange={(event) => this.handleChangeUsername(event)}/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw"
                               onChange={(event) => this.handleChangePassword(event)}/>

                        <button type="submit" onClick={(e) => this.handleSubmit(e)}>Login</button>
                    </div>
                </form>
                <FormComponent addJob = {this.addJob}/>
                <ChildComponent name={this.state.username} age={29} jobs={this.state.jobs} deleteJob={this.deleteJob}/>
                <MyFunctionComponent name={this.state.username} age={29} jobs={this.state.jobs}/>
            </>
        )
    }
}

export default Color(MyComponent)

