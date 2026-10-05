import React from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import {motion} from "motion/react";

const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
      className="
    flex justify-between items-center px-4 sm:px-12 lg:px-24
    xl:px-48 sticky top-0 z-20 backdrop-blur-xl font-medium 

    py-4
    
    "
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt=" "
      />
      <div
        className={` ${sidebarOpen ? 'block' : 'hidden'} ${theme === 'dark' ? 'dark' : ''} text-grey-700 dark:text-white sm:text-sm max-sm:w-60
     max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
     max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
     flex sm:items-center gap-5 transition-all
     
     `}
      >

        <img onClick={() => setSidebarOpen(false)} src={assets.close_icon} className="w-4 sm:hidden max-sm:absolute max-sm:top-4 max-sm:right-4 max-sm:cursor-pointer" alt="" />    
        <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">
            Home
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">
          Our Work
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">
          Services
        </a>
        <a  onClick={() => setSidebarOpen(false)}href="#" className="sm:hover:border-b">
          Contact
        </a>
      </div>
  
        <img 
        className="sm:hidden cursor-pointer w-8"
        onClick={() => setSidebarOpen(true)} src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}/>

        <div className="flex items-center gap-4">
                 <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      <div
        className="
  text-sm
  max-sm:hidden
  bg-primary
  text-white
  px-6
  py-2
  rounded-full
  cursor-pointer
  hover:scale-105
  transition-all
"
      >
        

        <a href="#" className="flex items-center gap-2 sm:hover:border-b">
          Contact
          <img src={assets.arrow_icon} className="w-4" alt="" />
        </a>
      </div>

        </div>

    </motion.div>
  );
};

export default Navbar;
