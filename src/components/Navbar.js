import React from 'react';
import { Link } from 'react-router-dom';
import '../output.css'


const Navbar = () => {
  return (
    <>
    <nav className='p-4'>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
                <a href='#'><img src='logo.webp' className='w-40 h-12'/></a>
            </div>

            <div className="bg-green-700 rounded-xl">
                <div className='flex space-x-10 text-white font-semibold py-2 px-8'>
                    <a href="#" className="hover:text-gray-300 underline">Home</a>
                    
                    <svg width="4" height="28" viewBox="0 0 4 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2" y1="0.5" x2="2" y2="27.5" stroke="white" stroke-width="3"/>
                    </svg>

                    <a href="#" className="hover:text-gray-300">Recipe</a>

                    <svg width="4" height="28" viewBox="0 0 4 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2" y1="0.5" x2="2" y2="27.5" stroke="white" stroke-width="3"/>
                    </svg>

                    <a href="#" className="hover:text-gray-300">Popular</a>
                </div> 
            </div>

            <div>
                <a href='#' className="bg-green-700 py-2 px-6 rounded-full text-white font-semibold">Sign Up</a>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar