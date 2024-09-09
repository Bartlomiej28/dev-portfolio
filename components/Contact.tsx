import React from 'react'

function Contact() {
  return (
    <section className="py-6 w-full min-h-screen h-auto flex items-center justify-center" id='contact'>
      <div className="grid max-w-6xl w-full grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold text-[#343434]">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>(+48) 500 203 457</span>
            </p>
            <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					  </svg>
              <span>bartlomiej.boczylo@gmail.com</span>
            </p>
          </div>
        </div>
        <form action="https://formsubmit.co/bartlomiej.boczylo@gmail.com" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" method="POST">
	  <input type="hidden" name="_subject" value="Contact request"/>
          <label className="flex flex-col">
            <span className="mb-2">Full name:</span>
            <input type="text" name="name" placeholder="Full name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 px-4 py-2" required/>
          </label>
          <label className="flex flex-col">
            <span className="mb-2">Email address:</span>
            <input type="email" name="email" placeholder="Email address" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 px-4 py-2" required/>
          </label>
          <label className="flex flex-col">
            <span className="mb-2">Message</span>
            <textarea name="message" placeholder='Your message' rows={3} className="block w-full rounded-md focus:ring focus:ring-opacity-75 px-4 py-2" required></textarea>
          </label>
          <button  type="submit" className="mt-8 inline-block border border-[#343434] bg-[#343434] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#343434] focus:outline-none focus:ring active:text-[#343434] duration-200 rounded-full">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
