// import { Button } from "@/components/ui/button";
// import React, { useContext, useEffect, useState } from "react";
// import { Textarea } from "@/components/ui/textarea";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { useParams } from "react-router-dom";
// import { LoaderCircle } from "lucide-react";
// import GlobalApi from "./../../../../../service/GlobalApi";
// import { toast } from "sonner";
// import {AIChatSession} from './../../../../../service/AIModal'

// const prompt="Job Title: {jobTitle}, Depends on job title give me summery for my resume within 4-5 lines in JSON format with field experience Level and Summery with Experience level for Fresher, Mid-Level, Experienced"

// function Summary({enabledNext}) {
//   let { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

//   const [summary, setSummary] = useState();
//   const [loading, setLoading] = useState(false);
//   const params=useParams();

//   const [aiGeneratedSummeryList, setAiGeneratedSummeryList]=useState();

//   useEffect(() => {
//     summary &&
//       setResumeInfo({
//         ...resumeInfo,
//         summary: summary,
//       });
//   },[summary]);
  
//   const GenerateSummeryFromAI=async()=>{
//     setLoading(true)
//     const PROMPT=prompt.replace('{jobTitle}',resumeInfo?.jobTitle);
//     console.log(PROMPT);
//     const result=await AIChatSession.sendMessage(PROMPT);
//     console.log(JSON.parse(result.response.text()));
//     setAiGeneratedSummeryList(JSON.parse([result.response.text()]));
//     setLoading(false);
//   }


//   const onSave = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const data = {
//       data:{
//         summary:summary
//       }
//     };
//     console.log("Sending data to Strapi:", data);

//     console.log("resumeId:", params?.resumeId);

//     GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
//       (resp) => {
//         console.log(resp);
//         enabledNext(true);
//         setLoading(false);
//         toast.success("Details updated", {
//           className: "bg-green-100 text-green-900 border border-green-400",
//         });
//       },
//       (error) => {
//         setLoading(false);
//       }
//     );
//   };

//   return (
//     <div>
//       <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
//         <h2 className="font-bold text-lg">Summary</h2>
//         <p>Add Summary for your job title</p>

//         <form className="mt-7" onSubmit={onSave}>
//           <div className="flex justify-between items-end">
//             <label htmlFor="">Add Summary</label>

//             {/* AI BUTTON */}
//             <Button onClick={()=> GenerateSummeryFromAI()} type="button"
//               className="bg-gradient-to-r from-[#1a6aff] via- to-purple-500
//                  text-white font-semibold px-6 py-3 rounded-2xl 
//                  shadow-md hover:shadow-lg transition-all duration-300 
//                  hover:scale-105 hover:brightness-110"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="size-5"
//               >
//                 <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
//               </svg>
//               Generate from AI
//             </Button>
//           </div>

//           <Textarea
//             className="mt-5"
//             required
//             onChange={(event) => {
//               setSummary(event.target.value);
//             }}
//           />
//           <div className="mt-2 flex justify-end">
//             <Button type="submit" disabled={loading}>
//             {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
//           </Button>
//           </div>
//         </form>
//       </div>
//       {aiGeneratedSummeryList&& <div>
//           <h2 className="font-bold text-lg">Suggestions</h2> 
//           {aiGeneratedSummeryList.map((item, index)=>(
//             <div>
//               <h2 className="font-bold my-1">Level: {item?.experienceLevel}</h2>
//               <p>{item?.summary}</p>
//             </div>
//           ))} 
//       </div>}
//     </div>
//   );
// }

// export default Summary;



// Summary.jsx
import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import GlobalApi from "./../../../../../service/GlobalApi";
import { toast } from "sonner";
import { AIChatSession } from './../../../../../service/AIModal'; // Correct import

const prompt = "Job Title: {jobTitle}, Give me a summary for my resume within 4-5 lines in JSON format with fields 'experienceLevel' (possible values: 'Fresher', 'Mid-Level', 'Experienced') and 'summary'. Provide summaries for each experience level (Fresher, Mid-Level, Experienced) in an array of JSON objects.";

function Summary({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [summary, setSummary] = useState(''); // Initialize with empty string
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Only update resumeInfo.summary if 'summary' state is not empty or null
    if (summary) {
      setResumeInfo({
        ...resumeInfo,
        summary: summary,
      });
    }
  }, [summary]); // Depend on 'summary' state

  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    // Ensure jobTitle is available before proceeding
    if (!resumeInfo?.jobTitle) {
      toast.error("Please enter a Job Title in the Personal Detail section first.");
      setLoading(false);
      return;
    }

    const PROMPT = prompt.replace('{jobTitle}', resumeInfo.jobTitle);
    console.log("AI Prompt:", PROMPT);

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      let aiResponseText = result.response.text();

      // Attempt to clean the response if it includes markdown or extra characters
      // The AI might wrap JSON in ```json...```
      if (aiResponseText.startsWith('```json')) {
        aiResponseText = aiResponseText.substring(7, aiResponseText.lastIndexOf('```')).trim();
      } else if (aiResponseText.startsWith('```')) {
        aiResponseText = aiResponseText.substring(3, aiResponseText.lastIndexOf('```')).trim();
      }

      console.log("Raw AI Response Text:", aiResponseText);

      // Parse the JSON response
      const parsedResponse = JSON.parse(aiResponseText);
      console.log("Parsed AI Response:", parsedResponse);

      // Assuming the AI returns an array of objects directly, as per your prompt
      setAiGeneratedSummeryList(parsedResponse);

      // You might want to pre-fill the main summary textarea with one of the AI suggestions,
      // e.g., the 'Experienced' one, or the first one.
      if (parsedResponse.length > 0) {
        setSummary(parsedResponse[0]?.summary || ''); // Set the first summary as default
      }

    } catch (error) {
      console.error("Error generating summary from AI:", error);
      toast.error("Failed to generate summary from AI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onSave = async (e) => { // Make onSave async to await toast
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        summary: summary
      }
    };
    console.log("Sending data to Strapi:", data);
    console.log("resumeId:", params?.resumeId);

    try {
      const resp = await GlobalApi.UpdateResumeDetail(params?.resumeId, data);
      console.log(resp);
      enabledNext(true);
      setLoading(false);
      toast.success("Details updated", {
        className: "bg-green-100 text-green-900 border border-green-400",
      });
    } catch (error) {
      console.error("Error updating resume details:", error);
      setLoading(false);
      toast.error("Failed to update details.");
    }
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label htmlFor="">Add Summary</label>

            {/* AI BUTTON */}
            <Button onClick={() => GenerateSummeryFromAI()} type="button"
              className="bg-gradient-to-r from-[#1a6aff] via- to-purple-500
                 text-white font-semibold px-6 py-3 rounded-2xl
                 shadow-md hover:shadow-lg transition-all duration-300
                 hover:scale-105 hover:brightness-110"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <LoaderCircle className="animate-spin mr-2" size={20} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 mr-2"
                >
                  <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
                </svg>
              )}
              Generate from AI
            </Button>
          </div>

          <Textarea
            className="mt-5"
            required
            value={summary} // Bind value to state
            onChange={(event) => {
              setSummary(event.target.value);
            }}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
      {aiGeneratedSummeryList.length > 0 && ( // Only render if there are suggestions
        <div className="mt-5 p-5 shadow-lg rounded-lg border-t-primary border-t-4">
          <h2 className="font-bold text-lg mb-3">AI Suggestions</h2>
          {aiGeneratedSummeryList.map((item, index) => (
            <div key={index} className="border p-3 rounded-md mb-3 bg-gray-50">
              <h3 className="font-bold my-1 text-primary">Level: {item?.experienceLevel}</h3>
              <p className="text-gray-700">{item?.summary}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 text-blue-600 border-blue-600 hover:bg-blue-50"
                onClick={() => setSummary(item?.summary)}
              >
                Use this Summary
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summary;