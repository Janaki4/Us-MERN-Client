import React from 'react'
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom'
import {
    Home, Register, Login, SharedLayout, PageNotFound,
    CreateOrg, InviteEmployee, ProtectedRoute , Task
} from "./components"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoute>
                        <SharedLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Task/>} />
                    <Route path='create-org' element={<CreateOrg />} />
                    <Route path="invite-employee" element={<InviteEmployee />} />
                </Route>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/landing' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
