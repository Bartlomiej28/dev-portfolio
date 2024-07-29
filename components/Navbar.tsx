"use client"
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 fixed z-50 bg-white w-full shadow-sm">
      <div className="container flex justify-between h-8 mx-auto items-center">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <p className='text-2xl font-medium'>Bartłomiej Boczyło</p>
        </a>
        <ul className={`items-stretch space-x-3 md:flex ${isOpen ? 'flex' : 'hidden'} md:space-x-4`}>
          <li className="flex">
            <a rel="noopener noreferrer" href="/#" className="flex items-center px-4 -mb-1 border-b-2">Home</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#projects" className="flex items-center px-4 -mb-1 border-b-2">Projects</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#about-me" className="flex items-center px-4 -mb-1 border-b-2">About Me</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#contact" className="flex items-center px-4 -mb-1 border-b-2">Contact</a>
          </li>
        </ul>
        <button 
          className="flex justify-end p-4 md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`fixed inset-0 bg-white p-6 md:hidden ${isOpen ? 'block' : 'hidden'} shadow-lg`}>
        <button 
          className="absolute top-4 right-4" 
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col space-y-4">
          <li>
            <a rel="noopener noreferrer" href="/#" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#projects" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#about-me" className="block px-4 py-2" onClick={() => setIsOpen(false)}>About Me</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#contact" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
