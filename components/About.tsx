import React from 'react'
import zdjecie from '@/public/zdjecie3.jpg';
import Image from 'next/image'
function About() {
  return (
  <section className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8" id="about-me">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <Image
            alt=""
            src={zdjecie}
            className="absolute inset-0 h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Hi, I'm Bartłomiej Boczyło
          </h2>

          <p className="mt-4 text-gray-600">
            I graduated from a technical high school with a specialization in programming and I'm a passionate front-end developer. Although I don't have professional experience yet, I have dedicated countless hours to learning and honing my skills by creating my own web applications and websites. 
            My go-to technologies are React, NextJS and TailwindCSS, and occasionally I use VueJS.
            One of my proudest projects is a clone of the TikTok application, which challenged me to push the limits of my abilities and learn new techniques.
            Outside of programming, I enjoy reading books on personal development, business and entrepreneurship. These interests not only enrich my personal life but also inspire my approach to coding and problem-solving.
            In a team setting, I value helping others, working in a positive atmosphere and maintaining clear communication. My goal is to grow as quickly as possible in my career and eventually become a senior developer.
            I have also earned numerous certificates, which demonstrate my commitment to continuous learning and professional growth.
            I am excited about the future and look forward to contributing to innovative projects and collaborating with talented individuals.
          </p>

          <a href="#contact" className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About