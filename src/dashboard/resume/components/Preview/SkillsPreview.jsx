import React from "react";

function SkillsPreview({ resumeInfo }) {
  if (!resumeInfo?.skills || resumeInfo.skills.length === 0) return null;

  return (
    <div className="pt-7">
      <h4 className="font-bold text-base tracking-wide uppercase">Skills</h4>

      <div className="font-normal text-xs">
        {resumeInfo.skills.map((skill) => (
          <div key={skill.id} className="mb-4">
            <div className="flex justify-between pt-1 mb-0">
              <span className="text-sm font-medium text-gray-900">
                {skill.name}
              </span>
              <span className="text-sm text-gray-600">{skill.rating * 20}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className=" h-2.5 rounded-full"
                style={{ backgroundColor: resumeInfo? resumeInfo.themeColor:"black", width: `${skill.rating * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
