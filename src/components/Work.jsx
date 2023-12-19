import React from 'react'
import {  Experience, Achievement } from './static/Static'
import { FiExternalLink } from "react-icons/fi";

const BlockComponent=({id,date,description,company})=>(
  <>
     {id % 2 == 0 ? <div className="col-span-4 w-full h-full"></div> :
          <Block date={date} description={description} company={company} />}

      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-shade1"></div>
        <button className="absolute w-5 h-5 p-1 rounded-full bg-shade2 z-10 text- text-center" ></button>
      </div>

      {id % 2 == 0 ? <Block date={date} description={description} company={company} /> 
        : <div className="col-span-4 w-full h-full"></div>}
  </>
  
)
const Block = ({date, description,company}) => (

  <div className="col-span-4 w-full h-full shadow-lg rounded-md bg-background ">
    <div className="w-full h-full  rounded-md p-2 md:pl-4">
      <p className="text-shade2 text-xl font-medium py-2">{company}&nbsp;({date})</p>
      <p className="text-gray-100 sm:text-sm text-xs">{description}</p>
    </div>
  </div>

)
const Work = () => {
  return (
    <section className=' bg-dark_light'>

      <div className='primary-container bg-dark_light'>
        <p className='heading'>EXPERIENCE </p>
        <div className='primary-container'>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            {Experience.map((item, id) => (
              <BlockComponent key={id} id={id} date={item.date} description={item.description} company={item.company}/>
            ))}

          </div>
        </div>
      </div>

      <div className='primary-container bg-background'>
        <p className='heading'>ACHIEVEMENT</p>
        <div className='container  flx-row-between overflow-x-auto gap-10  primary-container'>
          {Achievement.map((ele, id) => (
            <div className='flex-col flex gap-3 p-5 justify-center shrink-0 w-[300px] h-[350px] border-2 border-shade1 rounded-lg text-center' key={id}>
              <p className='font-heading text-shade2 text-5xl'>{ele.achieve}</p>
              <p className='font-heading text-shade2 text-lg'>{ele.platform}</p>
              <p  className=' text-primary text-md '>{ele.description}</p>
              <a href=""  className=' text-shade1 flx-row-center'>View&nbsp;<FiExternalLink/> </a>
              
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Work