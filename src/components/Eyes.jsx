import React, { useEffect, useState } from 'react'
import "../components/Eyes.css"

const Eyes = () => {

    const [position, setPosition] = useState({x : 0, y : 0});

    useEffect((e)=>{
        function handleMouseMove(e){
            setPosition({ x: e.clientX, y: e.clientY });

            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
        window.addEventListener("mousemove", handleMouseMove);
    }, [])

  return (
    <div className='inline-block'>
        <div className='w-[130px] h-[80px] bg-[#FA9DCD] rounded-2xl border-[2.5px] border-[#000] flex gap-1 items-center justify-center rotate-10' style={{
                                                                                                                                                        transform: `translate(${(position.x - window.innerWidth / 2) / 100}px, 
                                                                                                                                                                                ${(position.y - window.innerHeight / 2) / 100}px)`,
                                                                                                                                                        }}>
            {/* Left Eye */}
            <div className='bg-[#fff] w-[40px] h-[40px] rounded-full border-[2.5px] border-[#000] relative overflow-hidden'>
                {/* Eye flap */}
                <div className='w-[100%] h-[41%] bg-[#4D17F5] rounded-t-full absolute top-0 left-0 z-10'></div>

                {/* Eye lid */}
                <div className='absolute top-[50%] left-[50%] eye-animate' style={{
              transform: `translate(${(position.x - window.innerWidth / 2) / 50}px, 
                                      ${(position.y - window.innerHeight / 2) / 50}px)`,
            }}>
                    {/* Eyeball */}
                    <div className='w-[15px] h-[15px] rounded-full bg-[#000] absolute z-20'></div>
                    {/* eye */}
                    <div className='w-[5px] h-[5px] rounded-full bg-[#fff] absolute z-30 top-1.5 left-1.5'></div>
                </div>
            </div>


            {/* Right Eye */}
            <div className='bg-[#fff] w-[40px] h-[40px] rounded-full border-[2.5px] border-[#000] relative overflow-hidden'>
                {/* Eye flap */}
                <div className='w-[100%] h-[41%] bg-[#4D17F5] rounded-t-full absolute top-0 left-0 z-10'></div>

                {/* Eye lid */}
                    <div className='relative top-[50%] left-[50%] eye-animate' style={{
                                                                    transform: `translate(${(position.x - window.innerWidth / 2) / 50}px, 
                                                                                            ${(position.y - window.innerHeight / 2) / 50}px)`,
                    }}>
                    {/* Eyeball */}
                    <div className='w-[15px] h-[15px] rounded-full bg-[#000] absolute z-20'></div>
                    {/* eye */}
                    <div className='w-[5px] h-[5px] rounded-full bg-[#fff] absolute z-30 top-1.5 left-1.5'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes