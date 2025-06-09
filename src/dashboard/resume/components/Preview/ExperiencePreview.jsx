import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="pt-7">
      <h4 className="font-bold text-base tracking-wide uppercase">
        Experience
      </h4>

      <div className="font-normal text-xs">
        {resumeInfo?.experience.map((exp, index) => (
          <div key={index} className="space-y-1">
            <div className="pt-3 flex justify-between items-center">
              <h3 className="text-sm font-semibold">{exp.title}</h3>
              <span className="text-xs text-gray-500">
                {exp.startDate} –{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </span>
            </div>

            <p className="text-sm text-gray-600 font-medium">
              {/* {exp.companyName}, {exp.city}, {exp.state} */}
              {[exp.companyName, exp.city, exp.state]
                .filter((value) => Boolean(value) === true) // removes empty/undefined/null values
                .join(", ")}
            </p>

            <ul className="list-disc list-outside text-xs pl-5 space-y-1 text-gray-700">
              {/* {exp.workSummary} */}

              {/* <div dangerouslySetInnerHTML={{ __html: exp?.workSummary }}></div> */}
              <div
                className="text-xs text-gray-700 
                          [&>ul]:list-disc [&>ul]:pl-5 
                          [&>ol]:list-decimal [&>ol]:pl-5 
                          [&>li]:mb-1"
                dangerouslySetInnerHTML={{ __html: exp?.workSummary }}
              ></div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePreview;

// {exp.workSummary?.split("\n").map((point, index) => (
//   <li key={index}>{point.replace(/^•\s*/, "")}</li>
// ))}
