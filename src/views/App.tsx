import React from 'react'
import logo from './logo.svg'
import './App.scss'
import MyComponent from '../components/MyComponent'
import ToDoList from "./Todos/ToDoList"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from "./Navbar/NavbarComponent"
import {
    Route,
    BrowserRouter, Routes
} from "react-router-dom"
import ListUser from "./Users/ListUser"
import FunctionComponent from "../components/Hook/FunctionComponent";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <NavbarComponent/>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Routes>
                        <Route path="/" element={<MyComponent />} />
                        <Route path="/todo" element={<ToDoList />} />
                        <Route path="/user" element={<ListUser />} />
                        <Route path="/function" element={<FunctionComponent />} />
                    </Routes>
                    {/*<MyComponent />*/}
                    {/*<ToDoList/>*/}
                </header>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </BrowserRouter>
    )
}

export default App
