import React from "react";
// import './PersonalDetailsPreview.css'

function PersonalDetailsPreview({ resumeInfo }) {
  const themeColor = resumeInfo?.themeColor || "#1a6aff";  // fallback color
  return (
    <div>
      <div className="heading py-10 pl-5"       
      style={{
        backgroundColor: themeColor,
        // backgroundColor:"#1E40AF",
        color: resumeInfo? "white": "black"
      }}>
        <h2 className="font-bold text-3xl tracking-wide uppercase">
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h2>
        <h3 className="font-medium text-base">{resumeInfo?.jobTitle}</h3>
        <div className="contact">
          <p className=" pt-5 font-normal text-xs">{resumeInfo?.phone} | {resumeInfo?.email} <br />{resumeInfo?.address}</p>
        {/* <h4 className=" pt-5 font-semibold">Contact</h4> */}
        {/* <ul >
          <li>{resumeInfo.phone}</li>
          <li>{resumeInfo.email}</li>
          <li>{resumeInfo.address}</li>
        </ul> */}
      </div>
    </div>
      </div>

      
  );
}

export default PersonalDetailsPreview;
