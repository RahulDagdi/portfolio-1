// import 'react'
// import { FaHtml5 } from "react-icons/fa";
// import { DiCss3 } from "react-icons/di";
// import { SiJavascript } from "react-icons/si";
// import { DiBootstrap } from "react-icons/di";
// import { FaGithub } from "react-icons/fa";

// import { RiReactjsLine } from 'react-icons/ri'
// import { FaNodeJs } from 'react-icons/fa'
// import { SiMongodb } from 'react-icons/si'
// import { SiExpress } from "react-icons/si";
// import { TbBrandNextjs } from 'react-icons/tb'

// import { SiContao } from "react-icons/si";
// import { TbBrandCpp } from "react-icons/tb";


// import { TbBrandPython, TbBrandReactNative, TbBrandTypescript, } from "react-icons/tb";
// import { SiNumpy, SiPandas, SiPlotly, } from "react-icons/si";
// import { SiPostgresql, SiOpenai } from "react-icons/si";


// import { TbDatabase } from "react-icons/tb";
// import { motion } from "framer-motion"


// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse"

//     }
//   }

// })

// const Technologies = () => {
//   return (
//     <>
//       <div className='border-b border-neutral-800 pb-24 ' >
//         <motion.h1

//           whileInView={{ Opacity: 1, y: 0 }}
//           initial={{ y: -100, Opacity: 0 }}
//           transition={{ duration: 1.5 }}

//           className='my-20 text-center text-4xl'> Technologies </motion.h1>

//         <motion.div

//           whileInView={{ Opacity: 1, x: 0 }}
//           initial={{ x: -100, Opacity: 0 }}
//           transition={{ duration: 1.5 }}

//           className='flex flex-wrap items-center justify-center gap-4'>

//           <motion.div

//             variants={iconVariants(2)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <FaHtml5 className='text-7xl text-red-600' />
//           </motion.div>


//           <motion.div
//             variants={iconVariants(2.5)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <DiCss3 className='text-7xl text-blue-200' />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiJavascript className='text-7xl text-yellow-400' />
//           </motion.div>



//           <motion.div
//             variants={iconVariants(2)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             < DiBootstrap className='text-7xl text-purple-800 ' />
//           </motion.div>

//           <motion.div
//             variants={iconVariants(2.5)}
//             initial="initial"
//             animate="animate"


//             className=' rounded-2xl  border-4 border-neutral-900 p-4 '>
//             < FaGithub className='text-7xl text-black-900' />
//           </motion.div>



//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <RiReactjsLine className='text-7xl text-cyan-400' />
//           </motion.div>


//           <motion.div
//             variants={iconVariants(2)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <FaNodeJs className='text-7xl text-green-700' />
//           </motion.div>

//           <motion.div
//             variants={iconVariants(2.5)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiMongodb className='text-7xl text-green-500' />
//           </motion.div>






//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"

//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiExpress className='text-7xl text-gray-100' />
//           </motion.div>

//           <motion.div
//             variants={iconVariants(2)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <TbBrandNextjs className='text-7xl text-white-400' />
//           </motion.div>


//           <motion.div
//             variants={iconVariants(2.5)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiContao className='text-7xl' />
//           </motion.div>


//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <TbBrandCpp className='text-7xl text-white-400 ' />
//           </motion.div>



//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <TbBrandPython className='text-7xl text-yellow-300' />
//           </motion.div>




//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiNumpy className='text-7xl text-white-400 ' />
//           </motion.div>

//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiPandas className='text-7xl text-white-400 ' />
//           </motion.div>


//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiPlotly className='text-7xl text-white-400 ' />
//           </motion.div>


//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <TbBrandReactNative className='text-7xl text-white-400 ' />
//           </motion.div>

//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <TbBrandTypescript className='text-7xl text-white-400 ' />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiPostgresql className='text-7xl text-white-400 ' />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <SiOpenai className='text-7xl text-white-400 ' />
//           </motion.div>


//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
//             <TbDatabase className='text-7xl text-white-400 ' />
//           </motion.div>




//         </motion.div>


//       </div>


//     </>
//   )
// }

// export default Technologies







import 'react'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from 'react-icons/tb'

import { SiC } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandPython, TbBrandReactNative, TbBrandTypescript, } from "react-icons/tb";
import { SiNumpy, SiPandas, SiPlotly, } from "react-icons/si";
import { SiPostgresql, SiOpenai } from "react-icons/si";
import { SiTailwindcss, SiMui, SiStripe, SiGmail, SiRazorpay } from "react-icons/si";

import { TbDatabase } from "react-icons/tb";
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"

    }
  }

})

const Technologies = () => {
  return (
    <>
      <div className='border-b border-neutral-800 pb-24 ' >
        <motion.h1

          whileInView={{ Opacity: 1, y: 0 }}
          initial={{ y: -100, Opacity: 0 }}
          transition={{ duration: 1.5 }}

          className='my-20 text-center text-4xl'> Technologies </motion.h1>

        <motion.div

          whileInView={{ Opacity: 1, x: 0 }}
          initial={{ x: -100, Opacity: 0 }}
          transition={{ duration: 1.5 }}

          className='flex flex-wrap items-center justify-center gap-4'>

          <motion.div

            variants={iconVariants(2)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <FaHtml5 className='text-7xl text-orange-600' />
            <span className='text-sm text-neutral-400'>HTML5</span>
          </motion.div>


          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <DiCss3 className='text-7xl text-blue-500' />
            <span className='text-sm text-neutral-400'>CSS3</span>
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiJavascript className='text-7xl text-yellow-400' />
            <span className='text-sm text-neutral-400'>JavaScript</span>
          </motion.div>



          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            < DiBootstrap className='text-7xl text-purple-600 ' />
            <span className='text-sm text-neutral-400'>Bootstrap</span>
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"


            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-900 p-4 '>
            < FaGithub className='text-7xl text-gray-200' />
            <span className='text-sm text-neutral-400'>GitHub</span>
          </motion.div>



          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <RiReactjsLine className='text-7xl text-cyan-400' />
            <span className='text-sm text-neutral-400'>React</span>
          </motion.div>


          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <FaNodeJs className='text-7xl text-green-600' />
            <span className='text-sm text-neutral-400'>Node.js</span>
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiMongodb className='text-7xl text-green-500' />
            <span className='text-sm text-neutral-400'>MongoDB</span>
          </motion.div>






          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"

            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiExpress className='text-7xl text-gray-300' />
            <span className='text-sm text-neutral-400'>Express</span>
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <TbBrandNextjs className='text-7xl text-white' />
            <span className='text-sm text-neutral-400'>Next.js</span>
          </motion.div>


          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiTailwindcss className='text-7xl text-sky-400' />
            <span className='text-sm text-neutral-400'>Tailwind CSS</span>
          </motion.div>


          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiC className='text-7xl text-blue-600 ' />
            <span className='text-sm text-neutral-400'>C</span>
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <TbBrandCpp className='text-7xl text-blue-300 ' />
            <span className='text-sm text-neutral-400'>C++</span>
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <TbBrandPython className='text-7xl text-yellow-300 ' />
            <span className='text-sm text-neutral-400'>Python</span>
          </motion.div>

        


          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiNumpy className='text-7xl text-blue-400 ' />
            <span className='text-sm text-neutral-400'>NumPy</span>
          </motion.div>

   <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiPandas className='text-7xl text-indigo-400 ' />
            <span className='text-sm text-neutral-400'>Pandas</span>
          </motion.div>


  <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiPlotly className='text-7xl text-pink-400 ' />
            <span className='text-sm text-neutral-400'>Plotly</span>
          </motion.div>


          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <TbBrandReactNative className='text-7xl text-cyan-300 ' />
            <span className='text-sm text-neutral-400'>React Native</span>
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <TbBrandTypescript className='text-7xl text-blue-500 ' />
            <span className='text-sm text-neutral-400'>TypeScript</span>
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiPostgresql className='text-7xl text-sky-600 ' />
            <span className='text-sm text-neutral-400'>PostgreSQL</span>
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiOpenai className='text-7xl text-emerald-400 ' />
            <span className='text-sm text-neutral-400'>OpenAI</span>
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiMui className='text-7xl text-blue-400 ' />
            <span className='text-sm text-neutral-400'>MUI</span>
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiStripe className='text-7xl text-indigo-500 ' />
            <span className='text-sm text-neutral-400'>Stripe</span>
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiRazorpay className='text-7xl text-blue-500 ' />
            <span className='text-sm text-neutral-400'>Razorpay</span>
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <SiGmail className='text-7xl text-red-500 ' />
            <span className='text-sm text-neutral-400'>Gmail SMTP</span>
          </motion.div>


          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 '>
            <TbDatabase className='text-7xl text-teal-400 ' />
            <span className='text-sm text-neutral-400'>Database</span>
          </motion.div>




        </motion.div>


      </div>


    </>
  )
}

export default Technologies