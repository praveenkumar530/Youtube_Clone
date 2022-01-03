import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType'

const initialState = {
    accessToken: sessionStorage.getItem('ytc-access-token'),
    loading: false,
    error: '',
    user: JSON.parse(sessionStorage.getItem('ytc-profile'))

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

        case LOG_OUT:
            return {
                ...previousState,
                accessToken: null,
                user: null
            }
        default:
            return previousState

    }

}

export default authReducer