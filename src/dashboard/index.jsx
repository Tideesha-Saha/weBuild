import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from '@/components/ResumeCardItem';
import { Loader2 } from 'lucide-react';

function Dashboard() {

  const {user}= useUser();
  const [resumeList, setResumeList] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(()=>{
    user&&GetResumeList()
  },[user])

  /**
   * Used to get users resume list
   */
  const GetResumeList= ()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp=>{
            setResumeList(resp.data.data);
            setPageLoading(false);
    })
  }

    if (pageLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-50 w-screen gap-2">
        <Loader2 className="animate-spin h-20 w-20 text-blue-500" />
        <div>Fetching your saved resumes. Please wait...</div>
      </div>
    );
  }

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating Amazing Resumes!</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        <AddResume/>
        {console.log(resumeList)}
        {resumeList.length>0&&resumeList.map((resume,index)=>(
          <ResumeCardItem resume={resume} key={index} refreshData={GetResumeList}/>
        ))}
      </div>
    </div>
  )
}

export default Dashboard