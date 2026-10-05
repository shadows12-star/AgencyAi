import React from 'react'
import Title from './Title'
import {teamData} from '../assets/assets'
import {motion} from "motion/react";

const Teams = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.1 }}
    viewport={{ once: true }}
    id="team"
    className="flex flex-col justify-center items-center gap-4 py-20 sm:py-32 lg:py-40 text-center w-full overflow-hidden text-gray-900 dark:text-white">

    <Title title="Our Team" desc="Meet the talented individuals behind our success." />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 w-full px-4 max-w-7xl">
      {teamData.map((member, index) => (
        <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        key={index} className="p-5 flex justify-start items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl pb-5 shadow-md hover:shadow-lg transition-transform duration-300">
          <motion.img 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src={member.image} alt={member.name} className="w-12 h-12 object-cover rounded-full" />
          <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="div">
             <h4 className="mb-2 px-4  text-start   text-gray-600 dark:text-white"
             style={{ fontWeight: 700 }}>{member.name}</h4>
          <p className="px-4 text-start text-sm  text-gray-500 dark:text-gray-300">{member.title}</p>

          </motion.div>
         
        </motion.div>
      ))}
    </div>
    </motion.div>
  )
}

export default Teams