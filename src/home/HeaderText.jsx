import { Button } from '@/components/ui/button'
import React from 'react'

function HeaderText() {
  return (
    <div className='w-[45vmax]'>
        <h1 className='font-bold !text-5xl'>Build a smart, sleek and ATS-ready resume from your <span className='text-blue-700'> GitHub profile</span><br /> in minutes. </h1>

        <p className='mt-5 text-sm text-gray-800  w-[70%]'>We turn your GitHub profile into a sleek, customizable resume - ready to download instantly, no hassle!</p>

        <Button className="mt-5 !rounded-full">Create My Resume</Button>
    </div>
  )
}

export default HeaderText