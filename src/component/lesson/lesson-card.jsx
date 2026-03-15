import { useEffect, useState } from "react";
import { Info, Volume2 } from "lucide-react";
import Alert from "../../assets/alert-error.png";

const LessonCard = ({ idx }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const renderCards = async () => {
      try {
        const res = await fetch(
          `https://openapi.programming-hero.com/api/level/${idx}`,
        );

        const data = await res.json();

        setCards(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    renderCards();
  }, [idx]);

  

  if (cards.length === 0) {
    return (
      <div className="container bg-[#F8F8F8] mx-auto rounded-3xl my-7 py-7 px-9 flex justify-center">
        <div className="flex flex-col space-y-6 text-center items-center">
          <img src={Alert} alt="alert" />
          <p className="text-[#79716B] font-medium text-[20px]">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <h1 className="text-black font-semibold text-[30px] sm:text-[40px]">
            নেক্সট Lesson এ যান
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#F8F8F8] py-9 px-9 rounded-3xl gap-6 mt-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="space-y-6 bg-white rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold">{card.word}</h3>

          <p className="font-medium">
            Meaning /Pronounciation
          </p>

          <h3 className="text-xl font-semibold">
            {card.meaning ? card.meaning : "Not Found"} /{" "}
            {card.pronunciation ? card.pronunciation : "Not Found"}
          </h3>

          <div className="flex justify-between pt-4">
            <div className="p-2 bg-[#1A91FF]/10 rounded-lg cursor-pointer">
              <Info />
            </div>

            <div
              className="p-2 bg-[#1A91FF]/10 rounded-lg cursor-pointer"
              onClick={() =>
                speechSynthesis.speak(new SpeechSynthesisUtterance(card.word))
              }
            >
              <Volume2 />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
