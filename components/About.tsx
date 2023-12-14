'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from 'react-tilt';
import services from "../constants";
import logo from '@/public/logo.jpg'
import SectionWrapper from '@/hoc/SectionWrapper';
const ServiceCard=({title,index}) => {
  return (
    <Tilt className='pl-3 w-[280px] flex flex-wrap'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-cyan-800 rounded-[20px] py-6 px-12 min-h-[350px] flex justify-evenly items-center flex-col'
        >
          <img
            src={logo}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
 
const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
              <p className='sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider'>
                Introduction</p>
              <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]' >
                    Overview</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-gray-200 text-[17px] flex leading-[30px]'>
          fshdbfjhbsdkfjsdkjhfksjdbfbdcbjsdckjsbdcjhhkvbcsdkbvkjdhsgdhgasvdhasjchgasjhcvjhasvcjhasvchjascjhasjh
        </motion.p>
      <div className='text-gray-100 mt-16  flex flex-wrap gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

        </div>
    </>
  )
}

export default SectionWrapper(About,"about")