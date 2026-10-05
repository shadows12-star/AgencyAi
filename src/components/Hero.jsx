import React from 'react'
import assets from '../assets/assets'
import {motion} from "motion/react";

const Hero = () => {
  return (
    <div
    id="hero"
    className="
    flex flex-col justify-center items-center gap-4
    py-20 sm:py-32 lg:py-40
    text-center w-full overflow-hidden
    text-gray-50 dark:text-white"
    
    >
    <motion.div 
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-row items-center gap-4 px-4  border-2 border-gray-500 dark:border-white rounded-full py-2">
    <img src={assets.group_profile} className="w-22 " alt="" />
   <p className="text-xs font-medium text-gray-900 dark:text-white">
  Welcome to our community
</p>
    </motion.div>
  <motion.h1
  initial={{ y: 40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mt-5 max-w-5xl  px-4 text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wide [word-spacing:0.55rem] text-gray-900 dark:text-white">
  Turning Imagination Into{" "}
  <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Digital Impact
  </span>
 

</motion.h1>

<motion.div 
initial={{ y: 20, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
className="mt-5 relative w-full bg-transparent rounded-lg overflow-hidden flex flex-col items-center gap-4 px-4 py-8 sm:py-12 lg:py-16">
   <motion.p
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ duration: 0.5 }}
   viewport={{ once: true }}
   className="mt-5 max-w-2xl text-center text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide text-gray-500 dark:text-gray-300">
  We are a team of passionate developers, designers, and strategists dedicated to creating innovative digital solutions.
</motion.p>
  <img
    src={assets.bgImage1}
    className="
    absolute -top-100
    w-5xl  object-cover 
    opacity-20  dark:opacity-0"
    alt=""
  />
  <img
    src={assets.hero_img}
    className="mt-5
    w-full max-w-5xl z-0 "
    alt=""
  />
 
</motion.div>
    
    </div>



    
  )
}

export default Hero