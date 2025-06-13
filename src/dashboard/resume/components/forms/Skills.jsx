import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { toast } from "sonner";

function Skills() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const {resumeId} = useParams();
  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);

  useEffect(() => {
    resumeInfo && setSkillsList(resumeInfo?.skills);
  }, []);

  const handleChange = (index, name, value) => {
    const newEntries = skillsList.slice();
    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkill = () => {
    setSkillsList([
      ...skillsList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };

  const RemoveSkill = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };
  const onSave = () => {
    setLoading(true);
    const data={
        data:{
            skills:skillsList
        }
    }
    console.log(data);

    GlobalApi.UpdateResumeDetail(resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast.success("Details updated !");
      },
      (error) => {
        setLoading(false);
        toast.error("Server Error, Please try again!");
      }
    );


  };

  useEffect(() => {
      setResumeInfo({
        ...resumeInfo,
        skills: skillsList,
      });
    }, [skillsList]);



  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-xl">Skills</h2>
      <p className="text-sm font-semibold">Add Your Skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div key={index}>
            <p className="text-base mt-5 text-primary font-bold">
              Skills {index + 1}
            </p>
            <div
              className="grid grid-cols-2 border rounded border-l-primary p-3 gap-5 mt-1 "
              style={{ borderLeft: "3px solid #1a6aff" }}
            >
              <div className="col-span-2">
                <label className="text-base font-semibold"> Skill Name</label>
                <Input
                  name="name"
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  defaultValue={item?.name}
                />
              </div>

              <div className="col-span-2 flex justify-between">
                <label className="text-base font-semibold">Rating</label>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={item?.rating}
                  onChange={(v) => handleChange(index, "rating", v)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkill}
            className="text-primary"
          >
            {" "}
            + Add More Skills
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkill}
            className="text-primary"
          >
            {" "}
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
