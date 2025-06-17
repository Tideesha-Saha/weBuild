import React, { useContext } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Palette } from "lucide-react";
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

    const handleColorChange=(newColor)=>{
       setColor(newColor);
      //  console.log(newColor);
        setResumeInfo({
        ...resumeInfo,
        themeColor: newColor.hex,
        });

        const data={
          data:{
            themeColor:newColor.hex
          }
        }

        GlobalApi.UpdateResumeDetail(resumeId,data).then(resp=>{
          console.log(resp);
          // toast.success("Theme Color Updated!");
        })
  
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
        <ColorPicker color={color} onChange={handleColorChange} height={150} hideInput={["rgb", "hsv"]}/>
            
      </PopoverContent>
    </Popover>
  );
}
