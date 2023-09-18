'use client'
import React from 'react'
import icvert from './assets/icVert.svg'
import people1 from './assets/people1.svg'
import duedate from './assets/duedate.svg'

const Done = () => {
  return (
    <div>
        <div className='bg-[#211A75] px-5 rounded-lg md:w-[16vw] mt-5 py-3'>
            <div className='flex justify-between items-center'>
                <p className='text-[#FF4A55] text-sm'>BUGS FIXING</p>
                <img src={icvert} alt='k'/>
            </div> 
            <div className='text-white text-[12px] py-1'>
            Create sign up sheet for holiday student/parent conferences.
            </div>
            <div className="h-1.5 mt-2 bg-[#1E1C3A] rounded-full">
              <div className="h-full bg-[#FF4A55] rounded-full w-[100%]"></div>
            </div>
            <div className='flex justify-between mt-2.5 mb-1'>
                <img src={people1} className='w-[80px]'/>
                <img src={duedate} className='w-[80px]'/>
            </div>
        </div>
        <div className='bg-[#211A75] px-5 rounded-lg md:w-[16vw] mt-3 py-3'>
            <div className='flex justify-between items-center'>
                <p className='text-[#38E25D] text-sm'>Database</p>
                <img src={icvert} alt='k'/>
            </div> 
            <div className='text-white text-[12px] py-1'>
            Create sign up sheet for holiday student/parent conferences.
            </div>
            <div className="h-1.5 mt-2 bg-[#1E1C3A] rounded-full">
              <div className="h-full bg-[#38E25D] rounded-full w-[100%]"></div>
            </div>
            <div className='flex justify-between mt-2.5 mb-1'>
                <img src={people1} className='w-[80px]'/>
                <img src={duedate} className='w-[80px]'/>
            </div>
        </div>
        <div className='bg-[#211A75] px-5 rounded-lg md:w-[16vw] mt-3 py-3'>
            <div className='flex justify-between items-center'>
                <p className='text-[#E328AF] text-sm'>Instructor Meeting</p>
                <img src={icvert} alt='k'/>
            </div> 
            <div className='text-white text-[12px] py-1'>
            Create sign up sheet for holiday student/parent conferences.
            </div>
            <div className="h-1.5 mt-2 bg-[#1E1C3A] rounded-full">
              <div className="h-full bg-[#E328AF] rounded-full w-[100%]"></div>
            </div>
            <div className='flex justify-between mt-2.5 mb-1'>
                <img src={people1} className='w-[80px]'/>
                <img src={duedate} className='w-[80px]'/>
            </div>
        </div>
    </div>
  )
}

export default Done;