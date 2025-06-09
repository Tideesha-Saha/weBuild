import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState, useContext } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import { useParams } from "react-router-dom";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};

function Experience({enabledNext}) {
  const [experienceList, setExperienceList] = useState([formField]);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const params=useParams();
  const [loading,setLoading]=useState(false);
    // useEffect(()=>{
    //     resumeInfo?.Experience.length>0&&setExperienceList(resumeInfo?.Experience)
        
    // },[])

//     useEffect(() => {
//   if (resumeInfo?.experience?.length > 0) {
//     setExperienceList(resumeInfo.experience);
//   }
// }, []);

// useEffect(() => {
//   if (Array.isArray(resumeInfo?.Experience) && resumeInfo.Experience.length > 0) {
//     setExperienceList(resumeInfo.Experience);
//   }
// }, []);

useEffect(() => {
  if (Array.isArray(resumeInfo?.Experience)) {
    setExperienceList(resumeInfo.Experience.length > 0 ? resumeInfo.Experience : [formField]);
  }
}, [resumeInfo.Experience]);


// useEffect(() => {
//   if (Array.isArray(resumeInfo?.Experience)) {
//     setExperienceList(resumeInfo.Experience.length > 0 ? resumeInfo.Experience : [formField]);
//   } else if (Array.isArray(resumeInfo?.experience)) {
//     // fallback if lowercase 'experience' exists in context
//     setExperienceList(resumeInfo.experience.length > 0 ? resumeInfo.experience : [formField]);
//   }
// }, [resumeInfo.Experience, resumeInfo.experience]);



  const handleChange = (index, event) => {
    const newEntries = experienceList.slice(); //copy Array of experienceList
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };
  const addNewExperience = () => {
    
    setExperienceList([
      ...experienceList,
      {
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        workSummary: "",
      },
    ]);
  };
  const removeNewExperience = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };
  const handleRichTextEditor = (event, name, index) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = event.target.value;
    setExperienceList(newEntries);
  };

  // useEffect(() => {
  //   setResumeInfo({
  //     ...resumeInfo,
  //     experience: experienceList,
  //   });
  // },[experienceList]);

  
    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            experience:experienceList,
        });
     
    },[experienceList]);

    


   const onSave=()=>{
        setLoading(true);
        const data={
            data:{
                Experience:experienceList.map(({ id, ...rest }) => rest)
            }
        }

         console.log(experienceList)

         
        GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(res=>{
            console.log(res);
            setLoading(false);
            toast.success('Details updated !');
        },(error)=>{
            toast.error('Failed to Update. Please Try Again');
            setLoading(false);
        })

    }
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10 ">
        <h2 className="font-bold text-xl">Work Experience</h2>
        <p className="text-sm font-semibold">Add Your Work Experience</p>
        <div >
          {experienceList.map((item, index) => (
            <div key={index}>
              <p className="text-base mt-5 text-primary font-bold">Experience {index + 1}</p>
              <div className="grid grid-cols-2 border rounded border-l-primary p-3 gap-5 mt-1 " style={{ borderLeft: "3px solid #1a6aff" }}>
                <div>
                  <label className="text-base font-semibold">
                    Position Title
                  </label>
                  <Input
                    name="title"
                    value={item?.title}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-base font-semibold">
                    Company Name
                  </label>
                  <Input
                    name="companyName"
                    value={item?.companyName}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-base font-semibold">City</label>
                  <Input
                    name="city"
                    value={item?.city}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-base font-semibold">State</label>
                  <Input
                    name="state"
                    value={item?.state}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-base font-semibold">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    value={item?.startDate}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="">
                  <label className="text-base font-semibold">End Date</label>
                  <Input
                    type="date"
                    value={item?.endDate}
                    className="w-full border px-3 py-2 rounded text-black dark:text-white bg-white dark:bg-black date-input"
                    name="endDate"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="col-span-2">
                  {/* Work Summary */}
                  <RichTextEditor
                  index={index}
                  value={item?.workSummary}
                    onRichTextEditorChange={(event) =>
                      handleRichTextEditor(event, "workSummary", index)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={addNewExperience}
              className="text-primary"
            >
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              onClick={removeNewExperience}
              className="text-primary"
            >
              - Remove
            </Button>
          </div>

           <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
