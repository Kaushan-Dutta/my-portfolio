import React,{useState,useEffect,Suspense} from 'react'
import { NavLinks } from './routes.config';
import Navigation from './components/Navigation';
import { motion, AnimatePresence } from "framer-motion"


const App = () => {
  return (
     <AnimatePresence>

        {NavLinks.map((item,index)=>{
          return(
            <section  id={item.id} key={index}>
                {item.component}
            </section>
          )
        })}
        <Navigation/> 
     </AnimatePresence>
  )
}

export default App