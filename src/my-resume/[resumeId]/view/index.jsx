import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import ResumePreview from "@/dashboard/resume/components/ResumePreview";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";

function ViewResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      setResumeInfo(resp.data.data);
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
            <div className="flex justify-evenly my-5">
              <Button onClick={HandleDownload}>Download</Button>
              <Button onClick={handleShare}>Share</Button>
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
