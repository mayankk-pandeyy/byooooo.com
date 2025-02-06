import React from 'react'
import TextLoop from "react-text-loop";
import Eyes from './Eyes';
import Button from './Button';
import "../components/Hero.css"


const Hero = () => {
  return (
    <div className='w-[100vw] h-full'>
        <div className='relative w-[100%] h-[100%]'>
            <div className='w-[100%] h-[60vh] flex flex-col items-center justify-center'>
                <div className='text-[100px] font-[1000] w-[70vw] text-center uppercase mx-auto leading-[90px]'>
                    Build Your <br/> Dream Team <Eyes/> With
                </div>
                <div className='text-[90px] font-[1000] w-[80vw] text-center uppercase flex justify-end'>
                    <div className='w-[700px] h-[100px] overflow-hidden text-left'>
                        <TextLoop interval={2000} children={["ARTISTS", "DIRECTORS", "CREATORS", "HACKERS", "MARKETEERS", 'ANIMATORS', "UX DESIGNERS", "STRATEGISTS"]} className='text-amber-600' />
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-[20%]'>
                <img src='https://cdn.prod.website-files.com/6513c48ced436181a3a12349/653f64e80edd2d9b3c3525ee_group%20(1).svg'/>
            </div>
            <div className='absolute top-0 right-[20%]'>
                <img src='https://cdn.prod.website-files.com/6513c48ced436181a3a12349/6513da5a4e7a544d1c1025f6_Vector%2064.svg' className='rotate-img'/>
            </div>
            <div className='absolute bottom-[-30px] left-[25%]'>
                <img src='https://cdn.prod.website-files.com/6513c48ced436181a3a12349/65140083374b8498847099e3_Group%2011102.svg' className='w-[200px] h-[200px]'/>
            </div>
        </div>

        <div className='w-[100vw] flex flex-col items-center'>
            <div className='flex flex-col gap-[60px] ml-[120px]'>
                <div className='text-xl perfect-team'>
                    Find the perfect team for your business goals.
                </div>
                <div className=''>
                    <Button text={"GET A QUOTE"} isNew={true} className="text-7xl"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero