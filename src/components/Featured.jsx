import { motion, useAnimation,  } from 'framer-motion';
import { Power4 } from "gsap/all";
import React, { useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };
    
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

  return (
    <div className='w-full py-10 bg-[#F1F1F1]'>
        <div className='w-full px-10 pt-16 pb-8 border-b-2 font-["Poppins"] font-light tracking-tighter'>
            <h1 className='text-[4vw] text-black'>Featured projects</h1>
        </div>

        {/* Card-Sections */}
        <div className='px-10'>

            {/* Section-1 */}
            <div className='cards w-full flex gap-10 mt-10'>

                {/* card-1 */}
                <div className='w-1/2 h-[100vh] '>
                   <div className='flex items-center gap-2 mb-4'>
                      <div className='w-2 h-2 bg-black rounded-full'></div>
                      <h1 className='text-black'>FYDE</h1>
                   </div>

                   <motion.div 
                   onHoverStart={() => handleHover(0)} 
                   onHoverEnd={() => handleHoverEnd(0)}
                   className='cardcontainer relative w-full h-[75vh] '>                      
                      <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <h1 className='absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden text-[#CDEA68] font-semibold z-[9] text-8xl font-["Oswald"] leading-none tracking-tight '>
                        {"FYDE".split("").map((item, index) => (
                            <motion.span 
                                initial={{y: "100%"}} 
                                animate={cards[0]} 
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                className="inline-block">{item}
                            </motion.span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                      </div>
                   </motion.div>

                   <div className='links flex mt-4 gap-4'>S:
                        {["Audit", "copywriting", "sales deck", "slides design"].map((item, index) => (
                        <a key={index} className={`text-[1vw] uppercase rounded-full border-2 border-black px-2 py-1 text-black font-medium transition-colors duration-500 hover:bg-black hover:text-white`}>{item}</a>
                        ))}
                   </div>
                </div>

                {/* card-2 */}
                <div className='w-1/2 h-[100vh] '>
                   <div className='flex items-center gap-2 mb-4'>
                       <div className='w-2 h-2 bg-black rounded-full'></div>
                       <h1 className='text-black'>VISE</h1>
                   </div>

                   <motion.div
                   onHoverStart={() => handleHover(1)} 
                   onHoverEnd={() => handleHoverEnd(1)}
                   className='cardcontainer relative w-full h-[75vh] '>
                      <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold z-[9] text-8xl font-["Oswald"] leading-none tracking-tight '>
                            {"VISE".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y: "100%"}} 
                            animate={cards[1]} 
                            transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                            className="inline-block">{item}
                            </motion.span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                      </div>
                   </motion.div>

                   <div className='links flex mt-4 gap-4'>S:
                        {["Agency", "company presentation"].map((item, index) => (
                        <a key={index} className={`text-[1vw] uppercase rounded-full border-2 border-black px-2 py-1 text-black font-medium transition-colors duration-500 hover:bg-black hover:text-white`}>{item}</a>
                        ))}
                   </div>
                </div>
                
            </div>
            
            {/* Section-2 */}
            <div className='cards w-full flex gap-10 mt-10'>

                {/* card-3 */}
                <div className='w-1/2 h-[100vh] '>
                   <div className='flex items-center gap-2 mb-4'>
                      <div className='w-2 h-2 bg-black rounded-full'></div>
                      <h1 className='text-black'>TRAWA</h1>
                   </div>

                   <motion.div 
                   onHoverStart={() => handleHover(2)} 
                   onHoverEnd={() => handleHoverEnd(2)}
                   className='cardcontainer relative w-full h-[75vh] '>                      
                      <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold z-[9] text-8xl font-["Oswald"] leading-none tracking-tight '>
                        {"TRAWA".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y: "100%"}} 
                            animate={cards[2]} 
                            transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                            className="inline-block">{item}
                        </motion.span>
                        ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                      </div>
                   </motion.div>

                   <div className='links flex mt-4 gap-4'>S:
                        {["brand identity", "design research", "investor deck"].map((item, index) => (
                        <a key={index} className={`text-[1vw] uppercase rounded-full border-2 border-black px-2 py-1 text-black font-medium transition-colors duration-500 hover:bg-black hover:text-white`}>{item}</a>
                        ))}
                   </div>
                </div>

                {/* card-4 */}
                <div className='w-1/2 h-[100vh] '>
                   <div className='flex items-center gap-2 mb-4'>
                       <div className='w-2 h-2 bg-black rounded-full'></div>
                       <h1 className='text-black'>PREMIUM BLEND</h1>
                   </div>

                   <motion.div 
                   onHoverStart={() => handleHover(3)} 
                   onHoverEnd={() => handleHoverEnd(3)}
                   className='cardcontainer relative w-full h-[75vh] '>
                      <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold z-[9] text-8xl font-["Oswald"] leading-none tracking-tight whitespace-nowrap '>
                            {"PREMIUM BLEND".split('').map((item, index)=>(
                                <motion.span 
                                initial={{y: "100%"}} 
                                animate={cards[3]} 
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                className="inline-block">{item}
                            </motion.span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                      </div>
                   </motion.div>

                   <div className='links flex mt-4 gap-4'>S:
                        {["branded template"].map((item, index) => (
                        <a key={index} className={`text-[1vw] uppercase rounded-full border-2 border-black px-2 py-1 text-black font-medium transition-colors duration-500 hover:bg-black hover:text-white`}>{item}</a>
                        ))}
                   </div>
                </div>
                
            </div>
        </div>

        <div className='w-full pt-8 flex items-center justify-center'>
            <button className='bg-black text-white uppercase px-6 py-3 rounded-full flex items-center gap-6'>
                view all case studies
                <div className='w-6 h-8 flex items-center justify-center rounded-full hover:scale-[4] transition-transform duration-300'>
                    <div className='w-3 h-3 bg-white rounded-full relative group'>
                        <span className='rotate-[45deg] text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'>
                            <FaArrowUpLong style={{ fontSize: '0.4rem' }} />
                        </span>
                    </div>
                </div>
            </button>
        </div>
        
    </div>
  )
}

export default Featured
