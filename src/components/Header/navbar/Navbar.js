import React from 'react'
import { Link } from 'react-router-dom'
import 'flowbite';
function Navbar() {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl font-sans hover:font-serif text-4xl">invoices</span>
                    </Link  >
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/invoices" class="mr-5 hover:text-gray-900"><h5 className='font-sans hover:font-serif text-3x1' >Invoices</h5></Link  >
                        <Link to="/drawer" class="mr-5 hover:text-gray-900"><h5 className='font-sans hover:font-serif text-3x1' >drawer</h5></Link  >
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar