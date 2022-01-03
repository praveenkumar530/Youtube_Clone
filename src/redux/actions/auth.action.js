import auth from '../../firebase'
import firebase from 'firebase/app'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType'

export const login = () => async dispatch => {

    try {
        dispatch({
            type: LOGIN_REQUEST
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        // this particual scope enables us to get through all the required things like comments, channel , edit add etc
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")

        const res = await auth.signInWithPopup(provider)
        const accessToken = res.credential.accessToken

        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem('ytc-access-token', accessToken)
        sessionStorage.setItem('ytc-profile', JSON.stringify(profile))

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

export const log_out = () => async dispatch => {

    await auth.signOut()

    // remove info from session storage

    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-profile')

    dispatch({
        type: LOG_OUT
    })

}
