import React from 'react'
import "../components/Navbar.css"
import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-[100vw]'>
        <div className='w-[95%] mx-auto flex justify-between items-center py-[10px] mt-[20px] px-[20px]'>
            {/* Left */}
            <div>
                <img src='https://cdn.prod.website-files.com/6513c48ced436181a3a12349/6513c9a16521cf40a6c41ef4_Group%2011089.svg' className='w-[150px]'/>
            </div>

            {/* Right */}
            <div className='flex gap-[40px] items-center'>
                <div className='relative mt-[20px]'>
                    <div className='font-extrabold'>
                        Join As A Talent
                    </div>
                    <div className='absolute -top-[20px] right-0'>
                        <img src='https://cdn.prod.website-files.com/6513c48ced436181a3a12349/6513cf1b722bbead5d618519_Frame%2057.svg' className='w-[40px]'/>
                    </div>
                </div>

                <div className=''>
                    <Button text={"Get In Touch"} isNew={false}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar