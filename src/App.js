import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Register, Login, ResetPassword, PageNotFound } from "./components"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/resetpassword",
        element: <ResetPassword />
    }, {
        path: "*",
        element:<PageNotFound/>
    }
])

const App = () => {
    return (
        <div >
            <RouterProvider router={router} />
        </div>
    )
}

export default App
