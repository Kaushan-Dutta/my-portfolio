import React from 'react'
import { InfinitySpin  } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className=' w-screen h-screen px-5 md:px-0  fixed z-30 justify-center items-center flex flex-row top-0 left-0 bg-dark_light'>
    <InfinitySpin 
        width='200'
        color="#33CAC1"
        />
    </div>
  )
}

export default Loader