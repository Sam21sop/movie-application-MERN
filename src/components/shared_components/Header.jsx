import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Movie Watchlist</h1>
                    <nav>
                        <Link to="/movie-application-MERN" className="mr-4">Home</Link>
                        <Link to="/movie-application-MERN/add" className="mr-4">Add Movie</Link>
                    </nav>
                </div>
            </header>
            <main className='w-full bg-gray-300 py-4'>
                <Outlet/>
            </main>
        </>
    )
}

export default Header