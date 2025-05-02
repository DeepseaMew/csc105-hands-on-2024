import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <header className="container mx-auto px-4 py-4 flex justify-between items-center ">
        
                <h3 className="text-base font-bold sm:text-lg md:text-xl lg:text-2xl ">Artist Seamew</h3>
                <ul className="flex font-bold items-center py-2 px-4 mr-8 gap-8" >
                    <li className="cursor-pointer  bg-white hover:bg-slate-200 py-2 px-4 rounded-full">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer  bg-white hover:bg-slate-200 py-2 px-4 rounded-full">
                    <Link to="/aboutme">About Me</Link>
                    </li>
                    <li className="cursor-pointer  bg-white hover:bg-slate-200 py-2 px-4 rounded-full">
                    <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
                <button className="cursor-pointer bg-cyan-950 hover:bg-cyan-700 text-white shadow font-bold py-2 px-4 rounded-full">
                    Contact</button>
                
                    
            </header>
 

      )  
}

export default Navbar
