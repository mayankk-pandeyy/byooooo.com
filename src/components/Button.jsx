import React from 'react'

const Button = ({text, isNew}) => {
  return (
    <div className='max-w-fit border rounded-full py-[15px] px-[20px] btn-shadow'>
        <button className='text-[16px] font-bold flex gap-2 items-center'>
            <div>
                {text}
            </div>
            {
                isNew ? <div className=' uppercase bg-[#EBD22F] px-2 py-1 text-[15px] rounded-3xl'>
                            In 2 Mins
                        </div> : ""
            }
        </button>
    </div>
  )
}

export default Button