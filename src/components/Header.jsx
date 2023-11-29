import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";

const style={
  wrapper:`w-[200px]  primary-btn flx-row-center `
}
const Header = () => {
  return (
    <section className='primary-container bg-dark_light  h-screen flx-col'>
        <div className=' flx-col text-center text-white md:-translate-y-5'>
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
        <p className='text-lg md:w-2/5  mx-auto'>Alias, minus mollitia facere asperiores nulla illo hic ducimus sit, soluta voluptatibus vitae saepe accusamus vel aperiam deserunt corrupti quas dolorem quam!</p>
        <div className='flx-row-center md:space-x-5 gap-5 flex-wrap'>
          <a href="" className={`${style.wrapper} bg-theme text-dark` }><FaGithub className='text-lg'/>&nbsp;&nbsp;My Contribution</a>
          <a href="" className={style.wrapper}><GiStarFormation className='text-lg'/>&nbsp;&nbsp;My Resume</a>  
        </div> 
        </div>
      </section>

  )
}

export default Header