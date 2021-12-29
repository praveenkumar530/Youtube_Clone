import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import './_loginScreen.scss'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const handleLogin = () => {
        console.log("sldsl")
        dispatch(login())
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt="logo" />
                <button onClick={() => handleLogin()}> Login with google  </button>
                <p>This is a clone app</p>
            </div>

        </div>
    )
}

export default LoginScreen
