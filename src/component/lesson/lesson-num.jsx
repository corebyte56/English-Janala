import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

const LessonNum = ({ setIndex }) => {
  const [levels, setLevels] = useState([]);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
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
              onClick={() => {
                (setIndex(level.level_no), setActive(level.level_no));
              }}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg border-2 transition font-semibold cursor-pointer
          
          ${
            active === level.level_no
              ? "bg-indigo-500 text-white border-indigo-500"
              : "border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
          }
          
          `}
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
