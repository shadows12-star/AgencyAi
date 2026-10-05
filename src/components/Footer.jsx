import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          <div className="flex flex-col gap-5 max-w-md">
            <img
              src={theme === 'light' ? assets.logo : assets.logo_dark}
              className="w-20"
              alt="Logo"
            />

            <p className="text-sm text-gray-500 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="flex flex-wrap gap-4">
              <li>
                <a
                  className=" text-sm text-gray-500 dark:text-white hover:text-primary-700"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-gray-500 dark:text-white hover:text-primary-700"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-gray-500 dark:text-white hover:text-primary-700"
                  href="#"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-gray-500 dark:text-white hover:text-primary-700"
                  href="#"
                >
                  Our Work
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:max-w-md text-gray-600 dark:text-gray-400">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Subscribe To Our Newsletter
            </h3>

            <p className="text-sm mt-2 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-sm border border-gray-300 rounded-md py-2 px-4
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />

              <button
                className="bg-primary text-white text-sm py-2 px-5 rounded-md
                hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#">
              <img
                src={assets.facebook_icon}
                className="w-5"
                alt="Facebook"
              />
            </a>

            <a href="#">
              <img
                src={assets.twitter_icon}
                className="w-5"
                alt="Twitter"
              />
            </a>

            <a href="#">
              <img
                src={assets.instagram_icon}
                className="w-5"
                alt="Instagram"
              />
            </a>

            <a href="#">
              <img
                src={assets.linkedin_icon}
                className="w-5"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer