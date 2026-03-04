import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

const LessonNum = () => {
  const [levels, setLevels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status) {
          setLevels(data.data);
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {levels.length === 0 ? (
          <p className="text-gray-500">Loading lessons...</p>
        ) : (
          levels.map((level) => (
            <button
              key={level.id}
              className="flex items-center gap-2 border-2 border-indigo-500 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 font-semibold cursor-pointer"
            >
              <BookOpen size={18} />
              Lesson - {level.level_no}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default LessonNum;