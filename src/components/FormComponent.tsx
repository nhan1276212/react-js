import React from 'react'

class FormComponent extends React.Component<{addJob: any}> {
    state = {
        name: '',
        sl: ''
    }
    handleChangeJob = (event: any) : void => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeSL = (event: any) : void => {
        this.setState({
            sl: event.target.value
        })
    }

    handleSubmit = (event: any) : void => {
        event.preventDefault()
        if(!this.state.name || !this.state.sl) {
            alert('issue')
            return
        }
        this.props.addJob({
            name: this.state.name,
            sl: this.state.sl
        })
        this.setState({
            name: '',
            sl: ''
        })
    }
    render() {
        return(
            <>
                <form>
                    <div className="container">
                        <label htmlFor="job"><b>Job</b></label>
                        <input type="text" placeholder="Enter Job" name="job"
                               onChange={(event) => this.handleChangeJob(event)} value={this.state.name}/>

                        <label htmlFor="sl"><b>Password</b></label>
                        <input type="text" placeholder="Enter sl" name="sl"
                               onChange={(event) => this.handleChangeSL(event)} value={this.state.sl}/>

                        <button type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default FormComponent

