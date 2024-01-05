const initState = {
    users: [
        {id: 1, name: 'Nhan'},
        {id: 2, name: 'Nhan 2'},
    ]
}
const rootReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case 'CREATE_USER':
            const id = Math.floor(Math.random() * 10000)
            const user = {id: id, name: `name - ${id}`}
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state
    }
}

export default rootReducer
