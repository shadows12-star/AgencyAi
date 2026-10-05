import React from "react";
import {motion} from "motion/react";
const Title = ({ title, desc }) => {
  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col justify-center items-center gap-4">
      <motion.h2 
      initial={{ y: 20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" text-2xl text-gray-900 dark:text-white sm:text-3xl lg:text-4xl font-bold text-center mb-5">
        {title}
      </motion.h2>
      <motion.p 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl text-center text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide [word-spacing:5px] text-gray-500 dark:text-gray-300">
        {desc}
      </motion.p>
    </motion.div>
  );
};
export default Title;
