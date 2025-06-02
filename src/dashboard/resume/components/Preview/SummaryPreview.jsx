import React from "react";

function SummaryPreview({ resumeInfo }) {
  return (
        <div className='mb-0 pt-7'>
            <h4 className="font-bold text-base tracking-wide uppercase">Profile</h4>
            <p className=" pt-3 font-normal text-xs mb-0">{resumeInfo?.summary}</p>
        </div>
    );
}

export default SummaryPreview;
