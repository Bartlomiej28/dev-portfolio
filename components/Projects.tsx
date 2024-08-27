"use client";
import React, { useState } from 'react';
import { MyProjects } from "./MyProjects";
import { MySkills } from './MySkills';
import MyCertificates from './MyCertificates';
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

function Projects() {
  const [location, setLocation] = useState('projects');

  const words = [
    { text: "Why" },
    { text: "hire" },
    { text: "me?" },
  ];

  return (
    <section className='w-full min-h-screen h-[200vh] md:h-screen flex flex-col md:flex-row relative' id='projects'>
      {/* Left section */}
      <div className='w-full md:w-1/3 bg-white flex justify-center items-center p-4'>
        <div className='w-full flex flex-col gap-8 md:gap-16'>
          <div className='w-full h-auto'>
            <TypewriterEffectSmooth words={words} />
            <p className='text-sm md:text-base leading-relaxed mt-4'>
              I have completed numerous independent projects, gaining practical skills and knowledge. I hold many certificates that confirm my competencies and commitment to development. I constantly strive to improve my skills and enjoy developing myself. I believe that my experience and motivation will make me a valuable member of your team.
            </p>
          </div>
          <div className='w-full flex flex-col gap-4 justify-center items-center'>
            <button onClick={() => setLocation('projects')} className={`w-36 md:w-60 px-4 py-2 ${location === 'projects' ? 'bg-[#353535] text-white' : 'bg-white border border-[#353535]'} rounded-full text-center`}>Projects</button>
            <button onClick={() => setLocation('skills')} className={`w-36 md:w-60 px-4 py-2 ${location === 'skills' ? 'bg-[#353535] text-white' : 'bg-white border border-[#353535]'} rounded-full text-center`}>Skills</button>
            <button onClick={() => setLocation('certificates')} className={`w-36 md:w-60 px-4 py-2 ${location === 'certificates' ? 'bg-[#353535] text-white' : 'bg-white border border-[#353535]'} rounded-full text-center`}>Certificates</button>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className='w-full md:w-2/3 bg-gray-100 flex flex-col gap-4 items-center justify-center overflow-hidden'>
        {location === 'projects' && <MyProjects />}
        {location === 'skills' && <MySkills />}
        {location === 'certificates' && <MyCertificates />}
      </div>
      {/* Footer section */}
      <div className='absolute bottom-10 w-full md:w-2/3 text-center md:text-end'>
        <label className='px-4 py-2 bg-gray-900 text-white rounded-full animate-bounce'>
          {location === 'skills' ? 'Hover' : 'Scroll Down'}
        </label>
      </div>
    </section>
  );
}

export default Projects;
