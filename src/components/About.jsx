import React from 'react'
import {Education,Skills} from './static/Static';
import Profile from '../assets/images/profile.png';

const style={
  edu_head:`w-96 text-lg text-white   px-5 py-2 rounded-full border   font-primary flx-row-between`
}
const About = () => {
  return (
    <>
    <section className='primary-container   bg-background' >

      <div className=' text-center flx-col gap-5' >
        <img src={Profile} className='mx-auto rounded-full w-60 h-60 border-2' alt="Profile Image"/>
        <p className='text-5xl font-heading text-shade2'>I'm Kaushan Dutta</p>
        <p className='text-lg font-primary text-white md:w-2/3 w-full mx-auto tracking-widest'>
          I am a college student pursuing B.Tech in Computer Science and Engineering from Techno Main Saltlake, Kolkata. I have specially worked on Full Stack  Development and have a keen interest in Blockchain. Along with that I am an active participator in open source development and competitive programming.
        </p>
      </div>

      <div className='flx-row-center  md:space-x-10 gap-5 flex-wrap my-10 mini-container'>
         {Education.map((ele,id)=>(
            <div className={style.edu_head} key={id}>
              <p >{ele.year}</p>
              <div>
                <p>{ele.standard}</p><p>{ele.school}</p>
              </div>
              <p className='text-shade'>{ele.cgpa}</p>
            </div>
         ))}
      </div>

    </section>
    <section className='pt-[10vh] px-[5vw]  bg-dark_light'>

          <p className='heading'>TECH</p>
          <div className='primary-container place-items-center lg:grid-cols-8 md:grid-cols-5 grid-cols-3 grid  gap-5'>
            {Skills.map((ele,id)=>(
              <div className='bg-background flx-row-center w-[100px] h-[100px] rounded-md cursor-pointer shadow-sm' key={id}>
                <img className=' w-[60px] ' key={id} src={ele.logo}/>
              </div>
            ))}
          </div>

    </section>
    </>
  )
}

export default About