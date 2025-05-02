import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    return (
            <header className="p-4 bg-gray-800 text-gray-200">
                <ul className="flex " >
                    <li className="cursor-pointer hover:bg-gray-300 hover:text-black  py-2 px-4 rounded-full">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer hover:bg-gray-300 hover:text-black py-2 px-4 rounded-full">
                    <Link to="/login">Login</Link>
                    </li>
                    <li className="cursor-pointe hover:bg-gray-300 hover:text-black  py-2 px-4 rounded-full">
                    <Link to="/favorite">Favorites</Link>
                    </li>
                </ul>
                    
            </header>
 

      )  
}

export default Navbar
