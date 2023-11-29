import React from 'react'
import { Skills, Projects, Experience, Achievement } from './static/Static'
import { FiExternalLink } from "react-icons/fi";

const Block = ({date, description}) => (

  <div class="col-span-4 w-full h-full ">
    <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
      <h1 class="text-white text-xl font-medium py-2">{date}</h1>
      <p class="text-gray-100 sm:text-sm text-xs">{description}</p>
    </div>
  </div>

)
const Work = () => {
  return (
    <section className=' bg-background'>

      <div className='primary-container'>
        <p className='text-center font-heading text-5xl text-shade tracking-wider'>EXPERIENCE </p>
        <div className='primary-container'>
          <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            {Experience.map((item, id) => (
              <>
                {id % 2 == 0 ? <div class="col-span-4 w-full h-full"></div> :
                 <Block date={item.date} description={item.description} />}

                <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                  <div class="h-full w-1 bg-indigo-300"></div>
                  <img class="absolute w-10 h-10 p-1 rounded-full bg-indigo-400 z-10 text-white text-center" src={item.image}/>
                </div>

                {id % 2 == 0 ? <Block date={item.date} description={item.description} /> 
                : <div class="col-span-4 w-full h-full"></div>}
              </>
            ))}

          </div>
        </div>
      </div>

      <div className='pb-[10vh] px-[5vw]'>
        <p className='text-center font-heading text-5xl text-shade tracking-wider'>ACHIEVEMENT</p>
        <div className='flx-row-between overflow-x-auto gap-10  primary-container'>
          {Achievement.map((ele, id) => (
            <div className='flex-col flex gap-3 p-5 justify-center shrink-0 w-[300px] h-[350px] border-2 border-theme rounded-lg text-center'>
              <p className='font-heading text-shade text-5xl'>{ele.achieve}</p>
              <p className='font-heading text-shade text-lg'>{ele.platform}</p>
              <p  className='font-heading text-shade text-md text-left'>{ele.description}
              
               
                  <p className='font-primary text-shade flex-row flex items-center'>
                     {ele.galleryArray?
                         <>View&nbsp;<FiExternalLink/></>:
                         <><a href={ele.link}>View&nbsp;<FiExternalLink/></a></>}
                  </p>
              </p>
              
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Work