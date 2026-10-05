import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme,setTheme}) => {
    useEffect(() => {

    

    }, [])

useEffect(() => {

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
}, [theme])
  return (
    <>
    
    <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className=" text-white px-4 py-2 rounded-full hover:scale-105 transition-all">

        {theme === 'dark' ?(<img src={assets.sun_icon} className="w-5" alt="" />) : (<img src={assets.moon_icon} className="w-5" alt="" />)}
      </button>
    </>
  )
}

export default ThemeToggleBtn