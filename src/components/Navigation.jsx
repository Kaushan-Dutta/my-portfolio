import React from 'react';
import { NavLinks } from '../routes.config';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location=useLocation();


  return (
    <section className='fixed bottom-[5vh] md:bottom-[10vh] w-full z-10'>
      <div className='w-96 mx-auto flx-row-center px-4 py-2 rounded-xl  space-x-5 text-lg font-primary border border-shade1 bg-background bg-opacity-80 '>
        {NavLinks.map((item,index)=>(
          <a href={`#${item.id}`} key={index} className={`px-3 py-2 rounded-xl ${(location.hash=='' && item.id=='about') || location.hash.includes(item.id) ?'bg-shade2':''}   text-white w-[80px] flx-row-center`} >{item.route}</a>
        ))}

      </div>
    </section>
  )
}

export default Navigation