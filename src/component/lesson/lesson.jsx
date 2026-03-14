import React, { useState } from "react";
import LessonHeader from "./lesson-header";
import LessonNum from "./lesson-num";
import LessonCard from "./lesson-card";

const Lesson = () => {
  const [idx, setIndex] = useState(null);

  return (
    <div className="px-10 py-14 flex flex-col gap-10 items-center">
      <LessonHeader />

      <div className="max-w-6xl mx-auto py-10">
        <LessonNum setIndex={setIndex} />

        {idx ? (
          <LessonCard idx={idx} />
        ) : (
          <div className="container bg-[#F8F8F8] rounded-3xl py-20 px-32 my-7 flex justify-center">
            <div className="flex flex-col space-y-6 text-center items-center">
              
              <p className="text-[#79716B] font-medium text-[20px]">
                আপনি এখনো কোন Lesson Select করেন নি
              </p>
              <h1 className="text-black font-semibold text-[40px]">
                একটি Lesson Select করুন।
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;
