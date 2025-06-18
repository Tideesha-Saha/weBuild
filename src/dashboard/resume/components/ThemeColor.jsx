import React, { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader2, Palette } from "lucide-react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Button } from "@/components/ui/button";
import GlobalApi from "./../../../../service/GlobalApi";
import { toast } from "sonner";
import { useParams } from "react-router-dom";





export default function ThemeColor() {
    const [color, setColor] = useColor("#1a6aff");
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const {resumeId}=useParams();
    const [loading,setLoading]=useState(false);

    const handleSelect=(newColor)=>{
      setColor(newColor);
      setResumeInfo({
        ...resumeInfo,
        themeColor: newColor.hex,
        });

    }


    const handleColorChange= async ()=>{
      setLoading(true);
      toast("Please Wait till color is updated");
      //  setColor(newColor);
       console.log(color);
        setResumeInfo({
        ...resumeInfo,
        themeColor: color.hex,
        });

        const data={
          data:{
            themeColor:color.hex
          }
        }

        // GlobalApi.UpdateResumeDetail(resumeId,data).then(resp=>{
        //   console.log(color);
        //   console.log(resp);
        //   toast.success("Theme Color Updated!");
        // })
            try { 
                  await GlobalApi.UpdateResumeDetail(resumeId, data);
                  console.log(color);
                  toast.success("Theme Color Updated!");
                  setLoading(false);
              } catch (err) {
                  toast.error("Failed to update color.");
                  setLoading(false);
          }

  
    }
    
  return (
    <Popover>
      <PopoverTrigger asChild>
             <Button variant="outline" size="sm" className="flex gap-2" style={{
                border:"1px solid #1a6aff"
             }}>
                <Palette/>
                Theme
                </Button>
          
          </PopoverTrigger>
      <PopoverContent>
        <ColorPicker color={color} onChange={handleSelect} height={150} hideInput={["rgb", "hsv"]}/>
        <Button onClick={handleColorChange} className="mt-2 hover:scale-105"> {loading?<Loader2 className="animate-spin"/>:"Done"}</Button>
            
      </PopoverContent>
    </Popover>
  );
}
