import React,{useState} from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";



const ReviewPop = () => {
  const rate=[1,2,3,4,5]
  const [star,setStar]=useState(0);
  
  return (
    <div className='popup-window'>
        <div className='md:w-1/3 w-full  rounded-lg bg-dark_light'>

                <div className='flx-row-between p-5 text-white'>
                    <p className='flex flex-row items-center font-heading text-md'>
                        <FaRegThumbsDown className='w-8 h-8 rounded-full p-2 text-xl bg-shade '/>&nbsp;
                        Give me the feedback to work better
                    </p>
                        <RxCross1  className=' cursor-pointer'/>
                </div>
                <hr/>
                <form className='flex flex-col gap-3 text-white p-5'>

                    <div className='flex flex-row items-center space-x-5'>
                        <p className='font-heading text-md'>Rate your view:</p>
                        {rate.map((element,id) => (
                            <FaStar className={` text-lg ${id<star?'text-yellow-300':'text-white'}`} key={id} onClick={()=>setStar(id+1)}/>
                        ))}
                    </div>
                    <div className='border border-primary shrink-0 rounded-lg'>
                        <textarea className='w-full h-40 bg-transparent outline-none p-3' placeholder='Write here...'/>
                    </div>
                    
                    <button className='primary-btn-feed' type="submit">Submit feedback</button>
                </form>
        </div>
    </div>
  )
}

export default ReviewPop