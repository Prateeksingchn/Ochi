import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.15" className='w-full py-20 px-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Poppins"] font-light text-[3.5vw] leading-[3.8vw] -tracking-[0.3vw] '>
            Ochi is a strategic partner for fast-growing tech <br />
            businesses that need to <span className='underline'>raise funds, sell products, <br />
            explain complex ideas,</span> and <span className='underline'>hire great people.</span>
        </h1>
        <div className='w-full border-t-[2px] border-[#6d696939] mt-20 flex'>
            <div className='w-1/2 mt-6'>
              <p>What you can expect:</p>
            </div>
            <div className='w-[45%]  flex mt-6'>
              <div className='w-1/2 flex flex-col gap-8'>
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
              </div>
              <div className='links flex flex-col pt-20 pl-36'><span className='mb-4'>S:</span>
                  {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
                  <a key={index} className={`text-[1.2vw] capitalize cursor-pointer hover:underline`}>{item}</a>
                  ))}
              </div>
            </div>
        </div>
        <div className='w-full border-t-[2px] pt-2 border-[#6d696939] mt-20 flex'>
            <div className='w-1/2'>
                <h1 className='text-[3.7vw]'>Our approach:</h1>
                <button className='bg-black hover:bg-[#212121] text-white uppercase px-6 py-3 rounded-full flex items-center gap-6 mt-2'>
                    read more
                    <div className='w-6 h-8 flex items-center justify-center rounded-full hover:scale-[3.5] transition-transform duration-300'>
                        <div className='w-3 h-3 bg-white rounded-full relative group'>
                            <span className='rotate-[45deg] text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'>
                                <FaArrowUpLong style={{ fontSize: '0.4rem' }} />
                            </span>
                        </div>
                    </div>
                </button>
            </div>
            <div className='w-1/2 h-[65vh] bg-red-500 rounded-xl overflow-hidden hover:scale-90 transition ease-in'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;
