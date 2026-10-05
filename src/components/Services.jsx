import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from "motion/react";
const Services = () => {
    const servicesData=[

        {
            title:'Web Development',
            description:'We build responsive and scalable web applications using the latest technologies and best practices.',
            icon:assets.ads_icon


        },
        {
            title:'Digital Marketing',
            description:'We create and execute data-driven marketing strategies to help businesses reach their target audience and achieve their goals.',
            icon:assets.marketing_icon
        },
        {
            title:'Content Creation',
            description:'We produce high-quality content that engages and informs your audience, including blog posts, videos, and social media content.',
            icon:assets.content_icon
        },
        {
            title:'Social Media Management',
            description:'We manage and grow your social media presence, creating and curating content that resonates with your audience.',
            icon:assets.social_icon
        }
    ]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2
        
       }}
      viewport={{ once: true }}
      id="services"
      className="
    relative
    flex flex-col
    justify-center items-center
    gap-4
    py-20 sm:py-32 lg:py-40
    text-center
    w-full
    overflow-hidden
    text-gray-900
    dark:text-white
  "
>
  {/* Background image */}
  <img
    src={assets.bgImage2}
    className="
      absolute
      top-0
      left-0
      w-full
      h-full
      object-cover
      opacity-70
      dark:opacity-0
      pointer-events-none
      z-0
    "
    alt=""
  />

  {/* Content */}
  <div className="relative z-10">
    <Title
      title="How We Can Help You?"
      desc="We provide a wide range of services to help your business grow and succeed in the digital world."
    />
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full px-4 max-w-7xl">
  {servicesData.map((service, index) => (
    <ServiceCard
      key={index}
      service={service}
    />
  ))}
</div>
   
  </div>
</motion.div>
  )
}

export default Services 