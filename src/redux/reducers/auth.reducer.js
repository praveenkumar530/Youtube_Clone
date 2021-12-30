import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes'

const initialState = {
    accessToken: null,
    loading: false,
    error: '',
    user: null

}


const authReducer = (previousState = initialState, action) => {

    const { type, payload } = action

    switch (type) {

        case LOGIN_REQUEST:
            return {
                ...previousState,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...previousState,
                loading: false,
                accessToken: payload
            }
        case LOGIN_FAIL:
            return {
                ...previousState,
                loading: false,
                error: payload
            }
        case LOAD_PROFILE:
            return {
                ...previousState,
                user: payload
            }
        default:
            return previousState

    }

}

export default authReducer