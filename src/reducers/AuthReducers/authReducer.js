import { LOGIN_WITH_GMAIL } from '../../actions/AUTH/AUTH_ACTION_TYPES'

const initialState = {
   users: {},
    userData: {}
}

export default (state = initialState, action) => {
    console.log('LOGIN WITH GMAIL',action);
    switch (action.type) {
        case LOGIN_WITH_GMAIL:
        console.log('LOGIN WITH GMAIL:::::::::');
            return {
                userData: action.payload
            }
        default:
            return state
    }
}