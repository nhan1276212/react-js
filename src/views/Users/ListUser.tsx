import React from 'react'
import axios from 'axios'
import './ListUser.scss'
import {connect} from 'react-redux'

class ListUser extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleDelete = (item: any) => {
        // @ts-ignore
        this.props.deleteUserRedux(item)
    }

    handleAddUser = () => {
        // @ts-ignore
        this.props.addUserRedux()
    }

    render() {
        console.log('data', this.props)
        let { listUsers } = this.state
        // @ts-ignore
        let dataRedux = this.props.dataRedux
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item: any, index: any) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>

                <div className="list-user-content">
                    {dataRedux && dataRedux.length > 0 &&
                        dataRedux.map((item: any, index: any) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.name} <span onClick={()=>this.handleDelete(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => this.handleAddUser()}>Add User</button>

            </div>
        )
    }
}

const mapsStateToProps = (state: any) => {
  return {dataRedux: state.users}
}
const mapsDispatchToState = (dispatch: any) => {
    return {
        deleteUserRedux: (user: any) => dispatch({type: 'DELETE_USER', payload: user}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'})
    }
}


export default connect(mapsStateToProps, mapsDispatchToState)(ListUser)
