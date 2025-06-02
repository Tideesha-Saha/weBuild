import React from "react";

function EducationPreview({ resumeInfo }) {
  return (
        <div className="pt-7 mb-0">
            <h4 className="font-bold text-base tracking-wide uppercase">Education</h4>
            <div className="font-normal text-xs">

            {resumeInfo?.education.map((edu) => (
            
            <div key={edu.id} className="space-y-1">
                
                    <div className="pt-3">
                    <h3 className="text-xs font-bold">{edu.degree}</h3>
                    <h3 className="text-xs font-bold">{edu.major}</h3>

                    
                    <p className="text-xs text-gray-600 font-medium">
                    {edu.universityName}
                    </p>

                    <span className="text-xs text-gray-500">
                        {edu.startDate} –{" "}
                        {edu.currentlyWorking ? "Present" : edu.endDate}
                    </span>
                    </div>



                  
                    
                </div>
            ))}
        </div>
        </div>
    );
}

export default EducationPreview;
