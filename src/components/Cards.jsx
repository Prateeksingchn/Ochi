import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cardsElement = cardsRef.current;

    if (cardsElement) {
      gsap.to(cardsElement, {
        scrollTrigger: {
          trigger: cardsElement,
          start: 'top top',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true
        }
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.2 }}
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className='w-full min-h-screen bg-[#F1F1F1] flex items-center gap-5 px-14'
      ref={cardsRef}
    >
      <div className='cardcontainer w-full max-w-[800px] my-16'>
        <div className='relative card rounded-xl w-full h-[50vh] bg-[#004D43] flex items-center justify-center'>
          <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute left-10 bottom-8 text-[#CDEA68] border-2 border-[#CDEA68] rounded-full px-2 py-1  '>©️2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer w-full max-w-[800px] h-[50vh] flex gap-5'>
        <div className='relative card rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-6 bottom-8 text-[#F1F1F1] text-sm border-2 border-[#F1F1F1] rounded-full px-3 py-1 uppercase hover:bg-[#F1F1F1] hover:text-black transition-colors duration-300 '>rating 5.0 on clutch</button>
        </div>
        <div className='relative card rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
          <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute left-6 bottom-8 text-[#F1F1F1] text-sm border-2 border-[[#F1F1F1]] rounded-full px-3 py-1 uppercase hover:bg-[#F1F1F1] hover:text-black transition-colors duration-300 '>business bootcamp alumni</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
