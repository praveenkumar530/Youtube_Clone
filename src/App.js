import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import './_app.scss'

const App = () => {

    const [sidebar, toggleSidebar] = useState(false)


    const handleToggleSideBar = () => toggleSidebar(preValue => !preValue)

    return (
        <>
            {/* <Header handleToggleSideBar={handleToggleSideBar} />
            <div className="app__container border border-dark">
                <Sidebar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar} />

                <Container fluid className="app__main" >
                    <HomeScreen />
                </Container>
            </div> */}
            <LoginScreen />

        </>
    )
}

export default App
