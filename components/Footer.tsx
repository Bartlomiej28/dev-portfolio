import React from 'react'

function Footer() {
  return (
    <footer className='border '>
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
            <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start gap-4">
                <a href='#'>Home</a>
                <a href='#about-me'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </ul>
            <div className="flex flex-col justify-center pt-6 lg:pt-0">
                <div className="flex justify-center space-x-4">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/bart%C5%82omiej-boczy%C5%82o-71a275328/" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center py-4'>
            <p>All rights reserved by Bartłomiej Boczyło</p>
        </div>
    </footer>
  )
}

export default Footer
