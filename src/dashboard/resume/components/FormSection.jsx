import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, LayoutGrid } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Summary from './forms/Summary';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(true);
  const {resumeId}=useParams();
  return (
    <div>
      <div className='flex justify-between items-center'>
        <button variant="outline" size="sm"
        className='flex gap-2'> <LayoutGrid/>Theme</button>
        <div className='flex gap-2'>
          {activeFormIndex>1
            &&<Button size="sm" 
            onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button> }
            <Button 
            disabled={!enableNext}
            className="flex gap-2" size="sm"
            onClick={()=>setActiveFormIndex(activeFormIndex+1)}
            > Next 
            <ArrowRight/> </Button>
        </div>
      </div>
      {/* Personal Detail */}
          {activeFormIndex==1?  <PersonalDetail enabledNext={(v)=>setEnableNext(v)}/> :null}
      {/* Summary */}
            {activeFormIndex==2? <Summary enabledNext={(v)=>setEnableNext(v)}/>:null}
      {/**Experience */}
        {activeFormIndex==3? <Experience enabledNext={(v)=>setEnableNext(v)}/>:null}

      {/** Educational Detail */}
      {activeFormIndex==4? <Education enabledNext={(v)=>setEnableNext(v)}/>:null}
      {/** Skills */}
      {activeFormIndex==5? <Skills enabledNext={(v)=>setEnableNext(v)}/>:null}
    </div>
  )
}

export default FormSection