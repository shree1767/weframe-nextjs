'use client'
import React from 'react'
import icvert from './assets/icVert.svg'
import people1 from './assets/people1.svg'
import duedate from './assets/duedate.svg'

const Todolist = () => {
  return (
    <div>
        <div className='bg-[#211A75] px-5 rounded-lg md:w-[16vw] mt-3 py-3'>
            <div className='flex justify-between items-center'>
                <p className='text-[#FFAB2D] text-sm'>Important</p>
                <img src={icvert} alt='k'/>
            </div> 
            <div className='text-white text-[12px] py-1'>
            Create sign up sheet for holiday student/parent conferences.
            </div>
            <div className="h-1.5 mt-2 bg-[#1E1C3A] rounded-full">
              <div className="h-full bg-[#FFAB2D] rounded-full w-[25%]"></div>
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
              <div className="h-full bg-[#E328AF] rounded-full w-[40%]"></div>
            </div>
            <div className='flex justify-between mt-2.5 mb-1'>
                <img src={people1} className='w-[80px]'/>
                <img src={duedate} className='w-[80px]'/>
            </div>
        </div>
        <div className='bg-[#211A75] px-5 rounded-lg md:w-[16vw] mt-3 py-3'>
            <div className='flex justify-between items-center'>
                <p className='text-[#38E25D] text-sm'>Important</p>
                <img src={icvert} alt='k'/>
            </div> 
            <div className='text-white text-[12px] py-1'>
            Create sign up sheet for holiday student/parent conferences.
            </div>
            <div className="h-1.5 mt-2 bg-[#1E1C3A] rounded-full">
              <div className="h-full bg-[#38E25D] rounded-full w-[20%]"></div>
            </div>
            <div className='flex justify-between mt-2.5 mb-1'>
                <img src={people1} className='w-[80px]'/>
                <img src={duedate} className='w-[80px]'/>
            </div>
        </div>
    </div>
  )
}

export default Todolist