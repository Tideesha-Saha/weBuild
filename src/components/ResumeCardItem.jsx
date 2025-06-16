import React, { useState } from "react";
import {
  EllipsisVertical,
  Loader2Icon,
  LoaderCircle,
  MoveVertical,
  Navigation,
  Notebook,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumeCardItem.css";
import { Button } from "./ui/button";
import ViewResume from "@/my-resume/[resumeId]/view";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GlobalApi from "./../../service/GlobalApi";
import { toast } from "sonner";
// import { error } from "console";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert,setOpenAlert]=useState(false);
  const [loading,setLoading]=useState(false);

  const handleDelete=()=>{
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(resp=>{
                // setResumeList(resp.data.data);
                console.log(resp);
                toast.success("Resume Deleted");
                refreshData();
                setOpenAlert(false);
                setLoading(true);
        }),(error)=>{
          setLoading(false);
          toast.error("Failed to Delete. Please Try Again!");
          
        }
  }


  return (
    // <>Resume1</>
    <div className="hover:scale-105 transition-transform cursor-pointer">
      {/* <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}> */}
      <div
        className="mt-5 bg-gradient-to-br from-[#1d8cf3] to-[#0d47ca]
                 flex h-[170px] border border-primary rounded-lg relative "
      >
        {/* <Notebook  color="white" /> */}

        <img className="resume-icon mx-4" src="/docs.png" />

        <div className="ml-4 mr-2 flex items-end h-[145px] w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="font-semibold text-white">{resume.title}</h2>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical className="text-white w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>

                <DropdownMenuItem onClick={() => navigation("/dashboard/resume/" + resume.documentId + "/edit" ) }>
                  Edit
                </DropdownMenuItem>


                <DropdownMenuItem onClick={() =>navigation("/my-resume/" + resume.documentId + "/view") }>
                 View
                </DropdownMenuItem>

              
                <DropdownMenuItem onClick={() =>navigation("/my-resume/" + resume.documentId + "/view") }>
                  Download
                </DropdownMenuItem>

                <DropdownMenuItem onClick={()=>setOpenAlert(true)}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={openAlert}>
              {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} disabled={loading}>{loading? <Loader2Icon className="animate-spin"/>: "Delete"}</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* <Button className="!w-[50px] !h-[30px] !text-sm !rounded p-0 mt-2 text-center">Edit</Button> */}
      </div>
      {/* </Link> */}
    </div>
  );
}

export default ResumeCardItem;
