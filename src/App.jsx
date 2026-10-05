import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Services from './components/Services.jsx'
import OurWork from './components/OurWork.jsx'
import Teams from './components/Teams.jsx'
import ContactUS from './components/ContactUS.jsx'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer.jsx'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  // Track mouse position
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  // Smooth cursor outline
  useEffect(() => {
    let animationFrame

    const followMouse = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.2

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.2

      if (outlineRef.current) {
        outlineRef.current.style.transform =
          `translate(${position.current.x}px, ${position.current.y}px)`
      }

      animationFrame = requestAnimationFrame(followMouse)
    }

    animationFrame = requestAnimationFrame(followMouse)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">

      <Toaster position="top-right" reverseOrder={false} />

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUS />
      <Footer theme={theme} />

      {/* Custom cursor outline */}
      <div
        ref={outlineRef}
        className="
          fixed top-0 left-0
          w-4 h-4
          rounded-full
          border-2 border-pink-500
          pointer-events-none
          z-50
        "
      />

      {/* Custom cursor dot */}
      <div
        ref={dotRef}
        className="
          fixed top-0 left-0
          w-2 h-2
          rounded-full
          bg-pink-500
          pointer-events-none
          z-50
        "
      />

    </div>
  )
}

export default App