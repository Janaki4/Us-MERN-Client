import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Home = () => {
    return (
        <div className='flex  justify-center items-center h-screen'>
            <Button primary rounded> <Link to="/register">Register</Link></Button>
            <Button primary rounded><Link to="/Login">Login</Link></Button>
            <Button danger rounded ><Link to="/">Reset Password</Link></Button>
        </div>
    )
}

export default Home
