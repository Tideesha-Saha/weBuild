import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import ResumePreview from "@/dashboard/resume/components/ResumePreview";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import dummy from "@/data/dummy";
import { Download, Edit, Loader2, Share } from "lucide-react";

function ViewResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  const [pageLoading, setPageLoading] = useState(true);
  


  useEffect(() => {
    GetResumeInfo();
  }, []);

  // const GetResumeInfo = () => {
  //   GlobalApi.GetResumeById(resumeId).then((resp) => {
  //     setResumeInfo(resp.data.data);
  //   });
  // };


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


  const HandleDownload = () => {
    window.print();
  };

  const handleShare = () => {
    const shareData = {
      title: "Check out my resume!",
      text: "Here’s my resume. Let me know your feedback!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard! You can share it manually.");
    }
  };

    if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-50 w-screen gap-2">
        <Loader2 className="animate-spin h-20 w-20 text-blue-500" />
        <div>Please Wait...</div>
      </div>
    );
  }


  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div>
        {/* Non-printable area */}
        <div id="no-print-area">
          <Header />
          <div className="mt-10 mx-10 md:mx-20 lg:mx-36">
            <h2 className="text-center text-2xl font-semibold">
              Congratulations! Your resume has been successfully generated.
            </h2>
            <p className="text-center mt-2 text-sm md:text-xl text-gray-600">
              You can now download your resume or share it using the link below.
            </p>
            <div className="flex justify-center gap-5 my-5">
              <Link to={"/dashboard/resume/"+resumeId+"/edit"}>
                <Button className="">
                  <Edit /> <span>Edit</span>
                </Button>
              </Link>
              <Button onClick={HandleDownload}> <Download/> Download</Button>
              <Button onClick={handleShare}> <Share/>  Share</Button>
            </div>
          </div>
        </div>

        {/* Printable area */}
        <div className="flex justify-center items-center">
          <div
            id="print-area"
            className="w-full max-w-[794px] aspect-[794/1123] bg-white pt-0 md:p-8"
           
          >
            <ResumePreview />
          </div>
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
