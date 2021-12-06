import React from 'react'
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import './App.css'
import RoutePage from './components/RoutePage'
import HomePage from './components/HomePage'

function App() {
    return (
        <Routers>
            <div>
                <HeaderBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/rss/:type' element={<RoutePage />} />
                </Routes>
            </div>
        </Routers>
    )
}

export default App
