import { useState } from 'react'
import './App.css'
import {Button} from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import {useUser} from '@clerk/clerk-react'
import Header from './components/custom/Header'
// import { Toaster } from 'react-hot-toast';
import { Toaster } from "@/components/ui/sonner"

function App() {

  const {user, isLoaded, isSignedIn} = useUser();

  if(!isSignedIn && isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />

  }
  return (
    <>
    
    
    <Header/>
    <Outlet/>
    <Toaster />
    </>
    

  )
}

export default App
