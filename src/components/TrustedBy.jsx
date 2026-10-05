import React from 'react'
import {company_logos} from '../assets/assets'
import {motion} from "motion/react";
const TrustedBy = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
        <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
            Trusted by Industry Leaders
        </motion.h2>
        <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="py-8 flex flex-wrap justify-center items-center gap-12">
         {
            company_logos.map((logo, index) => (
                <img
                key={index} src={logo} alt={`Company ${index + 1}`} className="h-8  object-contain
                
                dark:drop-shadow-2xl" />
            ))
         }

        </motion.div>

    </motion.div>
  )
}

export default TrustedBy