import auth from '../../firebase'
import firebase from 'firebase/app'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes'

export const login = () => async dispatch => {

    try {
        console.log("coming here ")
        dispatch({
            type: LOGIN_REQUEST
        })

        const provider = new firebase.auth.GoogleAuthProvider()

        const res = await auth.signInWithPopup(provider)
        const accessToken = res.credential.accessToken

        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }

        dispatch({
            type: LOGIN_SUCCESS,  
            payload: accessToken
        })

        dispatch({
            type: LOAD_PROFILE,
            payload: profile
        })

        console.log(res)

    } catch (error) {

        console.log(error.message)
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}
