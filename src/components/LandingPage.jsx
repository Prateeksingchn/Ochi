import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className='textstructure mt-40 px-20 text-black'>
          {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
            return (
              <div className='masker' key={index}>
                <div className='w-fit flex items-center overflow-hidden'>
                  {index === 1 && (
                  <motion.div 
                  initial={{width: 0}} 
                  animate={{width: "8vw"}} 
                  transition={{ease: [0.76, 0, 0.24, 1] , duration: 1}} 
                  className='mr-[1vw] w-[8vw] h-[5.7vw] -top-[1.2vw] rounded-md mt-3 overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>)}
                  <h1 className='uppercase text-[7.3vw] -tracking-[3px] leading-[6.7vw] font-["Oswald"]  font-medium'>
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-3 px-20 text-black'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
            return (
              <p className='text-[16px] tracking-tight leading-none' key={index}>
                {item}
              </p>
            );
          })}
          
          <div className='start flex items-center gap-2 text-black group cursor-pointer'>
            <div className='px-5 py-1 border-[2px] border-zinc-700 rounded-full text-sm uppercase group-hover:bg-black group-hover:text-white transition-colors duration-300'>
              start the project
            </div>
            <div className='w-8 h-8 flex items-center justify-center border-[2px] border-zinc-700 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong />
              </span>
            </div>
          </div>

        </div>
      </div>
    );
  }
  

export default LandingPage;