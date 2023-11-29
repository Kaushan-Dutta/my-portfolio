import React,{useState,useEffect} from 'react'
import { NavLinks } from './routes.config';
import Navigation from './components/Navigation';


const App = () => {
  return (
     <div>
        {NavLinks.map((item,index)=>{
          return(
            <section id={item.path} key={index}>
                {item.component}
            </section>
          )
        })}
        <Navigation/>
     </div>
  )
}

export default App