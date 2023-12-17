import React,{useState} from 'react'
import { Social } from './static/Static'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ReviewPop from './popup/ReviewPop';

const style={
  btn_background:`border  p-2 border-background text-primary hover:text-shade2 hover:border-shade2`
}
const Footer = () => {
  const [likestate,setLikestate]=useState(false);
  const [unlikestate,setUnlikestate]=useState(false);

  return (
    <section className='bg-dark_light primary-container '>
      <div className='flx-row-center md:flex-row md:justify-between md:items-center  flex-wrap gap-5 '>
        
        <div className='flx-row-center space-x-5 '>
          {Social.map((ele,id)=>(
            <a href={ele.path} className={`${style.btn_background} rounded-full`} key={id}>{ele.logo}</a>
          ))}
        </div>
        <div className='flx-row-center space-x-5 '>
          <button className={`${style.btn_background} rounded-md`} onClick={()=>setLikestate(true)}><FaRegThumbsUp  className='w-6 h-6'/></button>
          <button className={`${style.btn_background} rounded-md`}  onClick={()=>setUnlikestate(true)}><FaRegThumbsDown  className='w-6 h-6'/></button>
        </div>
        
      </div>
      <hr className='my-5'/>
      <p className='font-primary flx-row-center text-lg text-primary'>Made with&nbsp; <FaHeart/>&nbsp;by Kaushan Dutta </p>
      {likestate && <ReviewPop setLikestate={setLikestate}   />}
      {unlikestate && <ReviewPop setUnlikestate={setUnlikestate} />}
    </section>
  )
}

export default Footer     