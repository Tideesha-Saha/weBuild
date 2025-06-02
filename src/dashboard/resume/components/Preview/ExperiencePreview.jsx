import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="pt-7">
      <h4 className="font-bold text-base tracking-wide uppercase">
            Experience
      </h4>

        <div className="font-normal text-xs">

            {resumeInfo?.experience.map((exp) => (
            
            <div key={exp.id} className="space-y-1">
                
                    <div className="pt-3 flex justify-between items-center">
                    <h3 className="text-sm font-semibold">{exp.title}</h3>
                    <span className="text-xs text-gray-500">
                        {exp.startDate} –{" "}
                        {exp.currentlyWorking ? "Present" : exp.endDate}
                    </span>
                    </div>


                    <p className="text-sm text-gray-600 font-medium">
                    {exp.companyName}, {exp.city}, {exp.state}
                    </p>

                    <ul className="list-disc list-outside text-xs pl-5 space-y-1 text-gray-700">
                    {exp.worksummary.split("\n• ").map((point, index) => (
                        <li key={index} >{point.replace(/^•\s*/, "")}</li>
                    ))}
                    </ul>
                    
                </div>
            ))}
        </div>

    </div>
  );
}

export default ExperiencePreview;
