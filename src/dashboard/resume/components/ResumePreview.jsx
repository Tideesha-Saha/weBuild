import React, { useContext } from "react";
import PersonalDetailsPreview from "./Preview/PersonalDetailsPreview";
import SummaryPreview from "./Preview/SummaryPreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ExperiencePreview from "./Preview/ExperiencePreview";
import EducationPreview from "./Preview/EducationPreview";
import SkillsPreview from "./Preview/SkillsPreview";

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="h-full shadow-lg"
    >
      {/* Personal Details */}
      <PersonalDetailsPreview resumeInfo={resumeInfo} />

      {/* {grid} */}
      <div className="grid grid-cols-1 md:grid-cols-3 py-8 pt-0 px-5 min-h-screen gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Education  */}
          <EducationPreview resumeInfo={resumeInfo} />
          {/* Skill  */}
          <SkillsPreview resumeInfo={resumeInfo} />
        </div>

        {/* RIGHT SIDE  */}
        <div className="md:col-span-2 space-y-6">

          {/* Summary */}
          <SummaryPreview resumeInfo={resumeInfo} />

          {/* Professional Experience */}
          <ExperiencePreview resumeInfo={resumeInfo} />
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
