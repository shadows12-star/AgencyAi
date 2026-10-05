import { useState } from "react";
import {motion} from "motion/react";

const ServiceCard = ({ service }) => {
  const [pos, setPos] = useState(null);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left) ,
      y: (e.clientY - rect.top) 
    });
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos(null)}
      className="flex w-full p-px rounded-2xl bg-gray-200 dark:bg-gray-700 shadow-sm hover:shadow-lg  transition-transform duration-300"
      style={
        pos
          ? {
              backgroundImage: `radial-gradient(580px circle at ${pos.x}px ${pos.y}px, rgba(236,72,153,0.8), transparent 40%)`,
            }
          : undefined
      }
    >
      <div className="flex flex-1 items-center gap-6 p-8 rounded-[15px] bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center w-20 h-20 shrink-0 rounded-full bg-white dark:bg-gray-800 shadow-md">
          <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain" />
        </div>

        <div>
          <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
            {service.title}
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;