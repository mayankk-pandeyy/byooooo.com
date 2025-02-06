import React, { useRef } from 'react'
import "../components/Steps.css"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Steps = () => {

    const rightCardRef = useRef(null);
    const leftCardItems = document.querySelectorAll('.left-card-item');

    useEffect(() => {

        gsap.fromTo(
            leftCardItems,
            { x: 0, opacity: 0 },  // Initial state for all items
            {
              x: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.2, // Delay between each item's animation
              scrollTrigger: {
                trigger: leftCardItems[0],  // Trigger based on the first item
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: true,
              },
            }
          );
    }, [])

    useEffect(() => {
        const rightCard = rightCardRef.current;
    
        gsap.fromTo(
            rightCard,
            { x: 200, opacity : 0.5 },  // Initial state: off-screen to the right
            {
              x: 0,
              opacity : 1,
              duration: 0.2,
              scrollTrigger: {
                trigger: rightCard,
                start : "top bottom",
                end : "bottom center",
                scrub : true,
              },
            }
          );
      }, []);

  return (
    <div className='w-[100vw] h-[100vh] bg-[url(https://cdn.prod.website-files.com/6513c48ced436181a3a12349/65151e0b110d687c9a364410_bg.svg)] overflow-x-hidden'>
        {/* Code */}
        <div className='w-full h-full flex'>
            {/* Left Section */}
            <div className='w-[50%] h-full flex items-center justify-center relative'>
                {/* Card */}
                <div className='bg-[#fff] w-[70%] h-[80%] rounded-4xl border-[2px] border-[#4D17F5] flex justify-center items-center'>
                    <div className='h-[80%] w-[60%] bg-amber-300 flex flex-col justify-between' style={{fontFamily : "spaceGrotesk-book"}}>
                        <div className='max-w-fit px-6 py-3 rounded-xl bg-[#4D17F5] text-xl text-[#fff]'>
                            Choose Service
                        </div>

                        <div className='max-w-fit px-6 py-3 border-[2px] text-[#000] border-[#000] rounded-xl bg-[#C1DDCA] text-xl left-card-item'>
                            Book A Team
                        </div>

                        <div className='max-w-fit px-6 py-3 border-[2px] text-[#000] border-[#000] rounded-xl bg-[#E7D5CD] text-xl left-card-item'>
                            Share A Brief
                        </div>

                        <div className='max-w-fit px-6 py-3 border-[2px] text-[#000] border-[#000] rounded-xl bg-[#E9E4C7] text-xl left-card-item'>
                            Review Work
                        </div>

                        <div className='max-w-fit px-6 py-3 border-[2px] text-[#000] border-[#000] rounded-xl bg-[#C1DDCA] text-xl left-card-item'>
                            Get Delivery
                        </div>
                    </div>
                </div>
                <div className='absolute top-5 right-10'>
                    <img src='https://cdn.prod.website-files.com/6513c48ced436181a3a12349/653cd6fd68483c974405e98b_5%20step%20(1).svg'/>
                </div>
            </div>


            {/* Right Section */}
            <div className='w-[50%] h-full flex items-center justify-center'>
                {/* Card */}
                <div className='bg-[#4D17F5] w-[80%] h-[80%] rounded-4xl flex items-center justify-center' ref={rightCardRef}>
                    <div className='w-[90%] h-[60%] flex flex-col gap-12'>
                        <div>
                            <div className='text-[#fff] text-7xl'>
                                ON-DEMAND TEAMS
                            </div>
                            <div className='text-[#fa9dcd] italic text-7xl'>
                                BUILT IN A BLINK
                            </div>
                        </div>

                        <div className='text-[#fff] flex flex-col gap-6 text-xl' style={{fontFamily: "spaceGrotesk-book"}}>
                            <div>
                                With our handpicked team of experts, you can now build an extension of your inhouse team, while ensuring top-notch results.
                            </div>
                            <div>
                                Our on-demand teams are more than just skilled; they're agile and adaptive. We work tirelessly behind the scenes, even when you’re off the clock.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps