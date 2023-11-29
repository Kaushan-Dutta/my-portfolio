import React from 'react'
import { Projects,ProjectHeader } from './static/Static'
import { FiExternalLink } from "react-icons/fi";


const Project = () => {
  return (
      
      <section className='py-[10vh] px-[5vw] bg-dark_light'>
        <p className='text-center font-heading text-5xl text-shade tracking-wider'>PROJECT</p>
        <div className='my-10 md:w-1/2 w-full mx-auto flx-row-center flex-wrap px-4 py-2 rounded-xl  space-x-5 text-lg font-primary border border-shade'>
          {ProjectHeader.map((item,index)=>(
            <button  key={index} className='px-3 py-2 rounded-xl hover:bg-shade   text-white  flx-row-center'>{item.heading}</button>
          ))}

        </div>
        <div className="flx-row-center flex-wrap gap-5">
          {Projects.map((obj,id)=>(
            <div className="w-72 h-80 rounded-md shadow bg-background" key={id}>
                <div className="h-1/2 p-5 flex-col gap-2 flex">
                  <div className='flx-row-between font-primary'>
                    <p className='text-yellow-500 text-lg'>Weather App</p><a href="/" className='text-theme'><FiExternalLink/></a>
                  </div>
                  <p className='text-md text-primary font-mono'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className='h-1/2 border-2'>
                  <img src={obj.img} alt="Project Image" className='w-full h-full object-cover'/>
                </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Project