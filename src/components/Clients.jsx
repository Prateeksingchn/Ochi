import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const companyInfo = [
  { company: 'Planetly', author: 'Nina Walloch' },
  { company: 'Workiz Easy', author: 'Tomer Levy' },
  { company: 'Premium Blend', author: 'Ellen Kim' },
  { company: 'Hypercare Systems', author: 'Brendan Goss' },
  { company: 'Officevibe', author: 'Raff Labrie' },
  { company: 'Orderlion', author: 'Stefan Strohmer' },
  { company: 'Stefan Strohmer', author: 'Jaci Smith' },
  { company: 'Trawa Energy', author: 'David Budde' }
];

function Clients() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      data-scroll
      data-scroll-speed="-0.01"
      className='w-full bg-[#F1F1F1] min-h-[120vh]'
    >
      {/* Part-1 */}
      <div className='w-full px-10 pt-16 pb-8 border-b-2 border-gray-300 font-["Poppins"] font-light tracking-tighter'>
        <h1 className='text-[4vw] text-black'>Clients’ reviews</h1>
      </div>

      {/* Part-2 */}
      <div className='w-full py-4 px-10 flex gap-5 border-b-2 border-gray-300'>
        <div className='w-1/2 h-[55vh] flex'>
          <div className='w-1/2 text-black underline'>Karman Ventures</div>
          <div className='w-1/2 flex flex-col gap-16'>
            <h1 className='text-black'>Services:</h1>
            <div className='flex flex-col gap-4'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-[180px] text-[12px]  text-black group hover:bg-black hover:text-white border-2 border-zinc-600 transition-colors duration-500 uppercase px-4 py-1 rounded-full flex items-center gap-10'
              >
                investor deck
                <div className='w-4 h-8 flex items-center justify-center rounded-full group-hover:scale-[2.5] transition-transform duration-300'>
                  <div className='w-3 h-3 bg-[#F1F1F1] rounded-full relative group'>
                    <span className='rotate-[45deg] text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'>
                      <FaArrowUpLong style={{ fontSize: '0.4rem' }} />
                    </span>
                  </div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-[140px] text-[12px]  text-black group hover:bg-black hover:text-white border-2 border-zinc-600 transition-colors duration-500 uppercase px-4 py-1 rounded-full flex items-center gap-6'
              >
                sales deck
                <div className='w-4 h-8 flex items-center justify-center rounded-full group-hover:scale-[2.5] transition-transform duration-300'>
                  <div className='w-3 h-3 bg-[#F1F1F1]  rounded-full relative group'>
                    <span className='rotate-[45deg] text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'>
                      <FaArrowUpLong style={{ fontSize: '0.4rem' }} />
                    </span>
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        <div className='w-1/2 h-[55vh] flex flex-col'>
          <h1 className='text-black'>William Barnes</h1>
          <div className='w-[15%] h-[23%] rounded-lg overflow-hidden mt-14'>
            <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
          </div>
          <p className='w-[65%] text-black mt-10'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
        </div>
      </div>

      {/* Part-3 */}
      {companyInfo.map((info, index) => (
        <div key={index} className='w-full px-10 py-4 border-b-2 border-gray-300 text-black font-light font-["Poppins"] flex'>
          <div className='w-1/2'>
            <a className='underline transition-all duration-500' href=''>{info.company}</a>
          </div>
          <div className='w-1/2 flex justify-between'>
            <h1>{info.author}</h1>
            <a className='underline transition-all duration-500' href=''>READ</a>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Clients;
