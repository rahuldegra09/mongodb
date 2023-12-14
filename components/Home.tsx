'use client'

import ComputersCanvas from '@/components/canvas/computers'
import { motion } from 'framer-motion';




const Home = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            
            <div className='absolute inset-0 top[120px] max-w-7xl mx-auto flex flex-row items-start gap-5' >
                <div className=' flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#9153ff]' />
                    <div className='w-1 sm:h-80 h-40 bg-[rgb(145,83,255)]' />
                </div>
                <div>
                    <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'> Hi , I'm<span className='text-white'>Rahul</span></h1>
                    <p className='mt-2 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
                        I develop web applications.
                    </p>
                </div>
            </div>
            <ComputersCanvas />
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about' >
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-red-600 flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-cyan-300 mb-1" />
                    </div>

                </a>
            </div>

        </section>
    )
}
export default Home;
