import React from 'react'
import { Skills, Projects, Experience, Achievement } from './static/Static'
import { FiExternalLink } from "react-icons/fi";

const BlockComponent=({id,date,description,image})=>(
  <>
     {id % 2 == 0 ? <div className="col-span-4 w-full h-full"></div> :
          <Block date={date} description={description} />}

      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-shade1"></div>
        <img className="absolute w-10 h-10 p-1 rounded-full bg-shade1 z-10 text-white text-center" src={image}/>
      </div>

      {id % 2 == 0 ? <Block date={date} description={description} /> 
        : <div className="col-span-4 w-full h-full"></div>}
  </>
  
)
const Block = ({date, description}) => (

  <div className="col-span-4 w-full h-full shadow-lg rounded-md bg-background">
    <div className="w-full h-full  rounded-md p-2 md:pl-4">
      <h1 className="text-shade2 text-xl font-medium py-2">{date}</h1>
      <p className="text-gray-100 sm:text-sm text-xs">{description}</p>
    </div>
  </div>

)
const Work = () => {
  return (
    <section className=' bg-dark_light'>

      <div className='primary-container bg-dark_light'>
        <p className='text-center font-heading text-5xl text-shade2 tracking-wider'>EXPERIENCE </p>
        <div className='primary-container'>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            {Experience.map((item, id) => (
              <BlockComponent key={id} id={id} date={item.date} description={item.description} image={item.image}/>
            ))}

          </div>
        </div>
      </div>

      <div className='primary-container bg-background'>
        <p className='text-center font-heading text-5xl text-shade2 tracking-wider'>ACHIEVEMENT</p>
        <div className='container  flx-row-between overflow-x-auto gap-10  primary-container'>
          {Achievement.map((ele, id) => (
            <div className='flex-col flex gap-3 p-5 justify-center shrink-0 w-[300px] h-[350px] border-2 border-shade1 rounded-lg text-center' key={id}>
              <p className='font-heading text-shade2 text-5xl'>{ele.achieve}</p>
              <p className='font-heading text-shade2 text-lg'>{ele.platform}</p>
              <p  className=' text-primary text-md '>{ele.description.slice(0,100)}</p>
              <a href=""  className=' text-shade1 flx-row-center'>View&nbsp;<FiExternalLink/> </a>
              
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Work