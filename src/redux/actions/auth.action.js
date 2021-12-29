import auth from '../../firebase'
import firebase from 'firebase/app'

export const login = () => async dispatch => {

    try {
        console.log("coming here ")
        const provider =new  firebase.auth.GoogleAuthProvider()

        const res = await auth.signInWithPopup(provider)

        console.log(res)

    } catch (error) {

    }
}
