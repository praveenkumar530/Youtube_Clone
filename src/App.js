import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom'

import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import './_app.scss'


const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)

    const handleToggleSideBar = () => toggleSidebar(preValue => !preValue)

    return (
        <>
            <Header handleToggleSideBar={handleToggleSideBar} />
            <div className="app__container border border-dark">
                <Sidebar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar} />

                <Container fluid className="app__main" >
                    {children}
                </Container>
            </div>
        </>
    )
}
const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth)
    const history = useHistory()

    useEffect(() => {
        if (!loading && !accessToken) {
            history.push('/auth')
        }

    }, [accessToken, loading])
    return (
        <Switch >
            <Route path="/" exact >
                <Layout >
                    <HomeScreen />
                </Layout>
            </Route>

            <Route path="/auth" >
                <LoginScreen />
            </Route>

            <Route path="/search" >
                <Layout >
                    <h1 > search </h1>
                </Layout>
            </Route>
            <Route >
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default App
