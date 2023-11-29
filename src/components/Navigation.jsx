import React from 'react';
import { NavLinks } from '../routes.config';

const Navigation = () => {

  return (
    <section className='fixed bottom-[5vh] md:bottom-[10vh] w-full '>
      <div className='w-96 mx-auto flx-row-center px-4 py-2 rounded-xl  space-x-5 text-lg font-primary border border-shade bg-background bg-opacity-80'>
        {NavLinks.map((item,index)=>(
          <a href={item.path} key={index} className='px-3 py-2 rounded-xl hover:bg-shade   text-white w-[80px] flx-row-center'>{item.route}</a>
        ))}

      </div>
    </section>
  )
}

export default Navigation