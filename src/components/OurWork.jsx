import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import {motion} from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Web Application Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: assets.work_mobile_app,
    },
    {
      title: "Fitness App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      image: assets.work_fitness_app,
    },
    {
      title: "Dashboard Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: assets.work_dashboard_management,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col justify-center items-center gap-4 py-20 sm:py-32 lg:py-40 text-center w-full overflow-hidden text-gray-900 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="Check out our latest projects and see what we can do for you."
      />
      <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full px-4 max-w-7xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 rounded-2xl pb-5 shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={work.image}
              alt={work.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4 text-base text-start sm:text-xl text-gray-600 dark:text-white"
              style={{ fontWeight: 600 }}
            >
              {work.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4  text-start text-sm leading-relaxed text-gray-500 dark:text-gray-300">
              {work.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurWork;
