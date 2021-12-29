import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import './_app.scss'

const App = () => {
    return (
        <>
            <Header />
            <div className="app__container border border-dark">
                <Sidebar  />

                <Container fluid className="app__main" >

                    <HomeScreen  />
                </Container>
            </div>
        </>
    )
}

export default App
