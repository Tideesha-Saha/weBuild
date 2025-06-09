import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import { AIChatSession } from './../../../../service/AIModal'; // Correct import



const PROMPT='position title: {positiontitle}, With the given positive title give 4-5 bullet points for experience section in resume. Ensure these are ATS friendly and aligns with the position title in a practical way, give the result in HTML format.'


import Editor, {
  BtnBold,
  BtnItalic,
  createButton,
  EditorProvider,
  BtnBulletList,
  BtnClearFormatting,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { toast } from "sonner";

const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");

export default function RichTextEditor({ onRichTextEditorChange, index}) {
  const [value, setValue] = useState();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [loading,setLoading]=useState(false);
   const [haveClickedAIBtn, setHaveClickedAIBtn]=useState(false);
  

  const GenerateSummaryFromAI=async()=>{
    setHaveClickedAIBtn(true);
    setLoading(true);
    if(!resumeInfo.experience[index].title){
      toast.error("Please Enter Position Title");
      return;
    }
    const prompt=PROMPT.replace('{positiontitle}',resumeInfo.experience[index].title);
       const result = await AIChatSession.sendMessage(prompt);
       console.log(result.response.text());
       const resp=result.response.text();
       setValue(resp.replace("```html","").replace("```",""));
      setLoading(false);
  }

  
  return (
    <div>
      <div className="flex justify-between items-center mb-5 mt-5" >
            <label className="text-base font-semibold">Add Summary</label>

            {/* AI BUTTON */}
            <Button onClick={() => GenerateSummaryFromAI()} type="button"
              className="bg-gradient-to-r from-[#1a6aff] via- to-purple-500
                 text-white font-semibold px-6 py-3 rounded-2xl
                 shadow-md hover:shadow-lg transition-all duration-300
                 hover:scale-105 hover:brightness-110"
              // disabled={loading} // Disable button while loading
            >
              {loading&&haveClickedAIBtn ? (
                <LoaderCircle className="animate-spin mr-2" size={20} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 mr-2"
                >
                  <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
                </svg>
              )}
              Generate from AI
            </Button>
          </div>


      <EditorProvider>
        <Editor
          containerProps={{ style: { resize: "vertical" } }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnBulletList />
            <BtnNumberedList />
            <Separator />
            <BtnLink />

          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}
