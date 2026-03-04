import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";


const LessonNum = () => {
  const [levels, setLevels] = useState([]);
  const [selectedLevelId, setSelectedLevelId] = useState(null);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
      .then((res) => res.json())
      .then((data) => setLevels(data.data));
  }, []);

  return (
    <div className="text-center ">
      <div className="flex flex-wrap flex-1 justify-center gap-6 mt-4">
        {levels.map((level) => (
          <button
            key={level.level_no}
            className="flex items-center gap-2 
                       border-2 border-indigo-500 
                       text-indigo-600 
                       px-6 py-2 rounded-lg 
                       hover:bg-indigo-500 
                       hover:text-white 
                       transition duration-300
                       font-semibold cursor-pointer"
          >
            <BookOpen size={18} />
            Lesson - {level.level_no}
          </button>
        ))}
      </div>
         {/* {selectedLevelId && <LessonCard lessonNo={selectedLevelId} />} */}
    </div>
  );
};

export default LessonNum;