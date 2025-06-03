import React from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutGrid } from 'lucide-react';

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
          {activeFormIndex==1?  <PersonalDetail/> :null}
      {/* Summery */}

      {/**Experience */}

      {/** Educational Detail */}

      {/** Skills */}
    </div>
  )
}

export default FormSection