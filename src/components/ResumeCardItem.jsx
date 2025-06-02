import React from 'react'
import { Notebook } from 'lucide-react'
import { Link } from 'react-router-dom'


function ResumeCardItem({resume}){
    return(
        // <>Resume1</>
        <div className='hover:scale-105 transition-transform cursor-pointer'>
            <Link to={'/dashboard/resume/'+resume.resumeId+"/edit"}>
              <div className='mt-5 p-14 bg-gradient-to-br from-[#1d8cf3] to-[#0d47ca]
 flex items-center justify-center h-[300px] border border-primary rounded-lg '>
                <Notebook  color="white" />
              </div>
              <h2 className = 'text-center mt-5 font-bold'>{resume.title}</h2>
    
            </Link>
        </div>
        
       
    )
}


export default ResumeCardItem