// import React, { useContext } from "react";
// import PersonalDetailsPreview from "./Preview/PersonalDetailsPreview";
// import SummaryPreview from "./Preview/SummaryPreview";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import ExperiencePreview from "./Preview/ExperiencePreview";
// import EducationPreview from "./Preview/EducationPreview";
// import SkillsPreview from "./Preview/SkillsPreview";

// function ResumePreview() {
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   return (
//     <div
//       className="h-full shadow-lg"
//     >
//       {/* Personal Details */}
//       <PersonalDetailsPreview resumeInfo={resumeInfo} />

//       {/* {grid} */}
//       <div className="grid grid-cols-1 py-8 pt-0 px-5 min-h-screen gap-10">
//         {/* LEFT SIDE */}
//         <div className="space-y-6">
//           {/* Education  */}
//           <EducationPreview resumeInfo={resumeInfo} />
//           {/* Skill  */}
//           <SkillsPreview resumeInfo={resumeInfo} />
//         </div>

//         {/* RIGHT SIDE  */}
//         <div className="">

//           {/* Summary */}
//           <SummaryPreview resumeInfo={resumeInfo} />

//           {/* Professional Experience */}
//           <ExperiencePreview resumeInfo={resumeInfo} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumePreview;

import React, { useContext } from "react";
import PersonalDetailsPreview from "./Preview/PersonalDetailsPreview";
import SummaryPreview from "./Preview/SummaryPreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ExperiencePreview from "./Preview/ExperiencePreview";
import EducationPreview from "./Preview/EducationPreview";
import SkillsPreview from "./Preview/SkillsPreview";

function ResumePreview() {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="flex justify-center print:bg-white">
      <div
        className="w-[794px] min-h-[1123px] bg-white text-black shadow-md overflow-hidden print:shadow-none"
      >
        {/* Personal Details */}
        <PersonalDetailsPreview resumeInfo={resumeInfo} />

        {/* Resume Content */}
        <div className="grid grid-cols-3 py-8 pt-0 px-5 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6 col-span-1">
            {/* Education */}
            <EducationPreview resumeInfo={resumeInfo} />
            {/* Skills */}
            <SkillsPreview resumeInfo={resumeInfo} />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 col-span-2">
            {/* Summary */}
            <SummaryPreview resumeInfo={resumeInfo} />
            {/* Experience */}
            <ExperiencePreview resumeInfo={resumeInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
