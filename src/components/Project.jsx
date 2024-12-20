

import 'react'
import { PROJECTS } from '../constants';
import {  motion } from "framer-motion"


const Project = () => {
  return (
    <>
      <div className='border-b border-neutral-900 pb-24 '> 
        <motion.h1
        
        whileInView={{Opacity : 1 , y :0 }}
        initial={{y : -100,Opacity:0 }}
        transition={{duration:0.5 }}
        className='my-20 text-center text-4xl'> Project </motion.h1>

        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <div className='w-full lg:w-1/4 '>
                {/* Displaying the image for each project */}
                <motion.div
                   whileInView={{Opacity : 1 , x :0 }}
                   initial={{x : -100,Opacity:0 }}
                   transition={{duration:0.5 }}
                
                className='flex items-center justify-center lg:mr-10 mb-6 '>
                  <img src={project.image} alt={project.title} className='rounded-2xl' />
                </motion.div>
              </div>



<motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ x: 100, opacity: 0 }}
  transition={{ duration: 1.5 }}
  className="w-full lg:w-3/4 px-4 sm:px-6 lg:px-8"
>
  <p className="mb-2 font-semibold text-base sm:text-lg lg:text-xl">{project.title}</p>
  <p className="mb-4 text-neutral-400 text-sm sm:text-base lg:text-lg">
    {project.description}
  </p>
  <p className="mb-2 flex flex-wrap">
    {project.technologies.map((tech, index) => (
      <span
        key={index}
        className="mr-3 mb-2 py-1 px-2 text-sm sm:text-base lg:text-lg rounded bg-neutral-700 text-purple-500"
      >
        {tech}
      </span>
    ))}
  </p>
  <p className="mb-2">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="py-1 px-2 text-sm sm:text-base lg:text-lg rounded bg-neutral-700 text-white hover:bg-neutral-600"
    >
      View Project
    </a>
  </p>
</motion.div>



            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
