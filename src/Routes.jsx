import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Login from './Pages/LoginPage'

export const Routers = () => {
    return (
    <Router>
        <Routes>
            <Route path='/login' element={<Login/>} />
        </Routes>
    </Router>
    )
}

