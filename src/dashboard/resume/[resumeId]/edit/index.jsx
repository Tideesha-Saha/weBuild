import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from '../../../../../service/GlobalApi';
import { Loader2 } from 'lucide-react';

function EditResume(){
    const {resumeId} = useParams();
    const [resumeInfo,setResumeInfo]=useState();

     const [pageLoading, setPageLoading] = useState(true);

   
    useEffect(() => {
        // setResumeInfo(dummy);
        GetResumeInfo();
    }, [])



    // const GetResumeInfo=()=>{
    //     GlobalApi.GetResumeById(resumeId).then((resp)=>{
    //         console.log(resp.data.data);
    //         setResumeInfo(resp.data.data);
    //     })
    // }

    
       const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then((resp) => {
          setResumeInfo(resp.data.data);
          console.log(resp.data.data);
           setPageLoading(false);
    
           const resumeData = resp.data.data;
           const isNewResume =
            (!resumeData.firstName) && (!resumeData.lastName) &&
            (!resumeData.jobTitle) && (!resumeData.phone) &&
            (!resumeData.address) && (!resumeData.email) &&
            (!resumeData.education || resumeData.education.length === 0) &&
            (!resumeData.education || resumeData.education.length === 0) &&
            (!resumeData.Experience || resumeData.Experience.length === 0) &&
            (!resumeData.skills || resumeData.skills.length === 0);
    
            if (isNewResume) {
            console.log("✅ This is a newly created resume");
            setResumeInfo({
            ...resumeData,
            ...dummy, // this will override personal details, education, etc.
          });
            }
            else{
                // setResumeInfo(resp.data.data);
                
                setResumeInfo({
                ...resumeData,
                ...resumeData, // this will override personal details, education, etc.
                });
            }
        });
      };

    if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-50 w-screen gap-4">
        <Loader2 className="animate-spin h-20 w-20 text-blue-500" />
        <div>Displaying Resume...</div>
      </div>
    );
  }


    return(
        <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            {/* Form Section */}
            <FormSection/>
            {/* Resume Section */}

            <div className='px-2 py-10'>
            <ResumePreview/>
            </div>
        </div>
        </ResumeInfoContext.Provider>
    )
}


export default EditResume