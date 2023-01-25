/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
export default function NavBar() {
    return (
        <nav className="p-3 pt-8 hero-bg">
            <div className="container-1 flex flex-wrap items-center justify-between mx-auto">
                <a to='/' className="flex items-center">
                    <img src="/images/Logo-5@2x.png" className="h-10 mr-3 sm:h-10" alt="Flowbite Logo" />
                </a>
                <div className="flex gap-10">
                    <span type="button" className="btn">Login</span>
                    <button data-collapse-toggle="navbar-hamburger" type="button" className="btn inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden w-full" id="navbar-hamburger">
                    <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a to='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a to='/Services' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                        </li>
                        <li>
                            <a to='/About' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">About</a>
                        </li>
                        <li>
                            <a to='/ContactUs' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}