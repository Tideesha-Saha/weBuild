import React from 'react'
import { Notebook } from 'lucide-react'
import { link } from 'fs'


function resumeCardItem(resume){
    return{
        
            <link to={'/dashboard/resume/'+resume.resumeId+"/edit"}>
              <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg hover: scale-105 transition-all hover: shadow-md shadow-primary'>
                <Notebook/>
              </div>
              <h2 className = 'text-center my-1'>{resume.title}</h2>
    
            </link>
        
       
    }
}


export default resumeCardItem