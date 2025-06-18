import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import HeaderText from './HeaderText'
import HeaderImage from './HeaderImage'

function Home() {
  return (
    <>
    <div>
      <Header className="top-0 left-0 w-full z-99"/>
      {/* Landing Page */}
      {/* <UserButton/> */}

      <div className=" bg-gradient-to-b from-[#1a6aff25] to-[#ffffff]">
        <div className="flex  flex-wrap justify-evenly items-center h-[calc(100vh-64px)] w-screen" >
          <HeaderText/>
           <HeaderImage/>
            

        </div>
      </div>


    </div>
    
    </>
  )
}

export default Home