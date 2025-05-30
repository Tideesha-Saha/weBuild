import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from 'uuid';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input"
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

function AddResume() {
    const [openDialog, setOpenDialog]= useState(false);
    const [resumeTitle,setResumeTitle]=useState();
    const {user}=useUser();
    const [loading,setLoading]=useState(false);

    const onCreate=async()=>{
        setLoading(true);
        const uuid=uuidv4();
        // console.log(uuid, resumeTitle)
        const data={
            data:{
                title:resumeTitle,
                resumeid:uuid,
                userEmail:user?.primaryEmailAddress?.emailAddress,
                userName:user?.fullName
            }
        }

        GlobalApi.CreateNewResume(data).then(resp =>{
            console.log(resp);
            if(resp){
                setLoading(false);
            }
        }, (err)=>{
            setLoading(false)
        })
    }

  return (
    <div>
      <div className="mt-5 border-3 border-dashed py-20 items-center flex justify-center bg-secondary rounded-lg h-[300px] cursor-pointer" 
      onClick={()=>setOpenDialog(true)}>
        <PlusSquare />
      </div>

    {/* {Both the cross button and the cancel button works, cross button works because when the cross btn is clicked the Dialog component automatically calls the onOpenChange function and passes false} */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold flex justify-start">Create New Resume</DialogTitle>

            <DialogDescription>
              <span className="flex justify-start">Add Resume Name</span>
              <Input className="mt-2" placeholder="Ex. Associate Engineer" onChange={(event)=>setResumeTitle(event.target.value)}/>
            </DialogDescription>


            <div className="flex gap-3 justify-end">
                <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
                <Button disabled={!resumeTitle || loading } onClick={onCreate}>
                    {loading ? <Loader2 className="animate-spin"/>: "Create"} </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
