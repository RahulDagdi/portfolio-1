import 'react'
import { EXPERIENCES } from '../constants';
import {  motion } from "framer-motion"

const Experience = () => {
  return (
    <>

     {/* <div className='border-b border-neutral-800 pb-24 ' >
                <motion.h1
                 
                 whileInView={{Opacity : 1 , y :0 }}
                 initial={{y : -100,Opacity:0 }}
                 transition={{duration:0.5 }}
                className='my-20 text-center text-4xl'> Experience  </motion.h1>

                <div>
                    {EXPERIENCES.map((experience, index)=>(
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                                <motion.div
                                   whileInView={{Opacity : 1 , x :0 }}
                                   initial={{x : -100,Opacity:0 }}
                                   transition={{duration:0.5 }}
                                
                                className='w-full lg:w-1/4' >
                                  <p className='mb-2 text-sm text-neutral-400'> {experience.year} </p>
                                </motion.div>

                                <motion.div
                                
                                     whileInView={{Opacity : 1 , x :0 }}
                                     initial={{x : 100,Opacity:0 }}
                                     transition={{duration:1.5 }}

                                className='w-full lg:w-3/4'>
                                  <p className='mb-2 font-semibold'> {experience.role} - {" "}
                                    <span 
                                    className='text -sm text-purple-400'> {experience.company}
                                     </span> 
                                    </p>


                                  <p className='mb-4 to-neutral-400'>  {experience.description}  </p>
                                  <p className='mb-2 '> 
                                    {
                                    experience.technologies.map((tech,index)=>(
                                        <span key={index} className='mr-3  py-1 px-2  text-sm rounded bg-neutral-700 text-purple-500'>{tech}</span>
                                    ))
                                    
                                    } </p>

                                </motion.div>
 

 
 
                                
 



                             </div>
                    ))}
                    
                </div>

        </div>  */}


<div className="border-b border-neutral-800 pb-24">
  <motion.h1
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ y: -100, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="my-20 text-center text-2xl sm:text-3xl lg:text-4xl"
  >
    Experience
  </motion.h1>

  <div>
    {EXPERIENCES.map((experience, index) => (
      <div
        key={index}
        className="mb-8 flex flex-wrap lg:justify-center lg:items-start"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/4 mb-4 lg:mb-0"
        >
          <p className="mb-2 text-sm sm:text-base lg:text-lg text-neutral-400">
            {experience.year}
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-3/4"
        >
          <p className="mb-2 font-semibold text-sm sm:text-base lg:text-lg">
            {experience.role} -{" "}
            <span className="text-sm sm:text-base lg:text-lg text-purple-400">
              {experience.company}
            </span>
          </p>

          <p className="mb-4 text-neutral-400 text-sm sm:text-base lg:text-lg">
            {experience.description}
          </p>

          <p className="mb-2 flex flex-wrap">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-3 mb-2 py-1 px-2 text-xs sm:text-sm lg:text-base rounded bg-neutral-700 text-purple-500"
              >
                {tech}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    ))}
  </div>
</div>


    </>
  )
}

export default Experience ;
