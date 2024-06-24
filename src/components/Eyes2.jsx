import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6";

function Eyes2() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });

    return () => {
      window.removeEventListener("mousemove", () => { });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: '-50%' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.5, delay: 0.2 }}
      data-scroll
      data-scroll-speed="-.6"
      className='w-full min-h-screen overflow-hidden bg-[#CDEA68] rounded-tr-2xl rounded-tl-2xl py-32'
    >
      <div className='relative w-full h-full'>
        <div className='w-full text-center text-[12vw] tracking-tighter text-[#212121] font-["Oswald"] font-bold leading-none '>READY</div>
        <div className='w-full text-center text-[12vw] tracking-tighter text-[#212121] font-["Oswald"] font-bold leading-none '>TO START</div>
        <div className='w-full text-center text-[12vw] tracking-tighter text-[#212121] font-["Oswald"] font-bold leading-none '>THE PROJECT?</div>
        <button className='bg-black hover:bg-[#212121] text-white uppercase px-6 py-3 rounded-full flex items-center gap-6 mt-8'>
          start the project
          <div className='w-6 h-8 flex items-center justify-center rounded-full hover:scale-[4] transition-transform duration-300'>
            <div className='w-3 h-3 bg-white rounded-full relative group'>
              <span className='rotate-[45deg] text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'>
                <FaArrowUpLong style={{ fontSize: '0.4rem' }} />
              </span>
            </div>
          </div>
        </button>
        <div className='w-full text-center text-black my-4 leading-none'>OR</div>
        <button className='bg-transparent hover:bg-[#212121] text-black hover:text-white uppercase px-6 py-3 rounded-full flex items-center gap-6 border-2 border-[#212121] '>
          hello@ochi.design
          <div className='w-6 h-8 flex items-center justify-center rounded-full hover:scale-[4] transition-transform duration-300'>
            <div className='w-3 h-3 bg-black hover:bg-white rounded-full relative group'>
              <span className='rotate-[45deg] text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'>
                <FaArrowUpLong style={{ fontSize: '0.4rem' }} />
              </span>
            </div>
          </div>
        </button>
        <div className='absolute flex gap-10 top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%] z-[99]'>
          <div className='flex items-center justify-center w-[11vw] h-[11vw] rounded-full bg-zinc-100 '>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[11vw] h-[11vw] rounded-full bg-zinc-100 '>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Eyes2;
