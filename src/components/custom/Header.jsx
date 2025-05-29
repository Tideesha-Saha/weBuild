import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import Dashboard from '@/dashboard';

function Header() {
  const { user, isSignedIn }= useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
        <img src="/webuild_Logo.svg" alt="" width="100" />
       

      {isSignedIn?
        <div className='flex gap-2 items-center'>
          <Link to={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton appearance={{
                elements: {
                  userButtonAvatarBox: 'border border-gray-700 rounded-full',
                },
              }}/>
        </div> :
        <Link to={'/auth/sign-in'}>
          <Button>Get Started</Button>
        </Link>
      }
       
     </div>
  )
}

export default Header