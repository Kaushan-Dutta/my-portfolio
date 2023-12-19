import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Feedback } from '../../utils';

const style = {
    thumbs: `w-8 h-8 rounded-full p-2 text-xl bg-shade `
}

const ReviewPop = ({ setLikestate = null, setUnlikestate = null }) => {
    const rate = [1, 2, 3, 4, 5]
    const { star, setStar, positiveFeedBack, negativeFeedBack, feedback, setFeedback } = Feedback();
    
    const checkFeed=()=>{
        if(setLikestate && star==0){
            return true
        }
        return feedback.length==0?true:false
    };

    return (
        <div className='popup-window'>
            <div className='md:w-1/3 w-full  rounded-lg bg-dark_light '>

                <div className='flx-row-between p-5 text-white'>
                    <p className='flex flex-row items-center font-heading text-md'>
                        {setLikestate ? <FaRegThumbsUp className={style.thumbs} /> : <FaRegThumbsDown className={style.thumbs} />}&nbsp;
                        {setLikestate ? `Give me feedback to work better` : `Please give feedback to improve at my work`}
                    </p>
                    <RxCross1 className=' cursor-pointer' onClick={() => setLikestate ? setLikestate(false) : setUnlikestate(false)} />
                </div>
                <hr />
                <div className='flex flex-col gap-3 text-white p-5' >

                    {setLikestate && <div className='flex flex-row items-center space-x-5'>
                        <p className='font-heading text-md'>Rate your view:</p>
                        {rate.map((element, id) => (
                            <FaStar className={` text-lg ${id < star ? 'text-yellow-300' : 'text-white'}`} key={id} onClick={() => setStar(id + 1)} />
                        ))}
                    </div>}
                    <div className='border border-primary shrink-0 rounded-lg'>
                        <textarea className='w-full h-40 bg-transparent outline-none p-3' placeholder='Write here...' value={feedback}  onChange={(e)=>setFeedback(e.target.value)}/>
                    </div>

                    <button className={`primary-btn-feed ${checkFeed()?'bg-[#485564]':'bg-background'}`}  disabled={checkFeed()} onClick={async()=>{
                        if(setLikestate)
                         {
                            await positiveFeedBack() 
                            setLikestate(false);}
                        else
                         {
                            await negativeFeedBack()
                            setUnlikestate(false)
                        }
                    }}>Submit feedback</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewPop