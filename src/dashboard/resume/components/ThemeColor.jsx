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





export default function ThemeColor() {
    const [color, setColor] = useColor("#1a6aff");
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const handleColorChange=(newColor)=>{
       setColor(newColor);
       console.log(newColor);
        setResumeInfo({
        ...resumeInfo,
        themeColor: newColor.hex,
        });
  
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
