import React, { useCallback, useEffect, useState } from 'react'
import { Projects, ProjectHeader } from './static/Static'
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Project = () => {
  const [heading, setHeading] = useState('all');
 
  return (

    <section className='primary-container bg-background'>
      <p className='heading'>PROJECT</p>
      <div className='my-10 md:w-1/2 w-full mx-auto flx-row-center flex-wrap px-4 py-2 rounded-xl  space-x-5 text-lg font-primary border border-shade1'>
        {ProjectHeader.map((item, index) => (
          <button key={index} className={` p-2 rounded-xl ${item.heading.toLowerCase() == heading ? 'bg-shade2' : ''}   text-white  flx-row-center`} onClick={
            () => { setHeading(item.heading.toLowerCase()) }}>
              {item.heading}
          </button>
        ))}

      </div>
      <div className="flx-row-center flex-wrap gap-5">
        {Projects.filter((item)=>item.tech.includes(heading) ).map((obj, id) => (
          <div className="w-[350px] h-[400px] rounded-md shadow-lg bg-dark_light" key={id}>
            <div className="h-2/5 p-5 flex-col gap-2 flex">
              <div className='flx-row-between font-primary'>
                <p className='text-shade1 text-lg'>{obj.name}</p><Link to={obj.link} className='text-shade2'><FiExternalLink /></Link>
              </div>
              <p className='text-md text-primary font-primary'>{obj.description}</p>
            </div>
            <div className='h-3/5  p-3'>
              <img src={obj.image} alt="Project Image" className='w-full h-full object-cover rounded-md' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project