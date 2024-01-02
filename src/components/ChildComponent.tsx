import React from 'react'
import '../styles/childComponent.scss'

class ChildComponent extends React.Component<{name: any, age: any, jobs: any, deleteJob: any}> {
    state = {
        showJobs: false
    }
    showJobs = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handelDeleteJob = (job: any) => {
        this.props.deleteJob(job)
    }
    render() {
        const { name, age, jobs } = this.props;
        const { showJobs } = this.state
        return(
            <>
                <h1>Child Component {name} and {age}</h1>
                {!showJobs &&<div><button onClick={() => {this.showJobs()}}>Show</button></div> }
                {showJobs &&
                    <>
                        <div className="jobs">
                            {
                                jobs.map((item: any, index: number) => {
                                    return <div key={index}>{item.name} - {item.sl} <span onClick={() => this.handelDeleteJob(item)}>x</span></div>
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => {this.showJobs()}}>hide</button>
                        </div>
                    </>
                }

                {
                    showJobs ?
                        <>
                            <div className="jobs">
                                {
                                    jobs.map((item: any, index: number) => {
                                        return <div key={index}>{item.name} - {item.sl}<span onClick={() => this.handelDeleteJob(item)}>x</span></div>
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => {
                                    this.showJobs()
                                }}>hide
                                </button>
                            </div>
                        </>
                        :
                        <div>
                            <button className={'show'} onClick={() => {
                                this.showJobs()
                            }}>Show
                            </button>
                        </div>
                }
            </>
        )
    }
}

export default ChildComponent

