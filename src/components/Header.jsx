import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import Resume from '../assets/documents/Resume.pdf'

const style={
  wrapper:`w-[200px]  primary-btn flx-row-center `
}
const Header = () => {
  return (
    <section className='primary-container bg-dark_light  h-screen flx-col'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,ease:'easeOut'}} className=' flx-col text-center text-white md:-translate-y-5'>
        <p className='md:text-7xl text-5xl font-heading flx-row-center flex-wrap gap-2'>
          STUDENT&nbsp;
          <span>
            <Typewriter
              words={["DEVELOPER", "FREELANCER", "BLOGGER", "DESIGNER"]}
              loop
              cursor
              cursorStyle='|'
             
            />
          </span>
        </p>
        <p className='text-lg md:w-2/5  mx-auto'>Learning and exploring the field web development and blockchain while actively contributing in open-source project.</p>
        <div className='flx-row-center md:space-x-5 gap-5 flex-wrap'>
          <Link to="https://github.com/Kaushan-Dutta" className={`${style.wrapper} bg-shade2 text-dark ` }><FaGithub className='text-lg'/>&nbsp;&nbsp;My Contribution</Link>
          <a href={Resume} target="_blank" className={style.wrapper + 'border border-shade1'}><GiStarFormation className='text-lg'/>&nbsp;&nbsp;My Resume</a>  
        </div> 
        </motion.div>
    </section>

  )
}

export default Header