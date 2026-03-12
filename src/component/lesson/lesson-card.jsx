import React, { useState, useEffect } from 'react'
import { Info, Volume2 } from 'lucide-react';

const LessonCard = () => {

  const [card, setCard] = useState([])

  const cardRender = async () => {
    try {
      const res = await fetch("https://openapi.programming-hero.com/api/word/all");
      const data = await res.json();

      setCard(data.data);
      console.log(data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cardRender();
  }, []);

  return (
    <div className='grid grid-cols-3 gap-6'>

      {card.map((item) => (

        <div key={item.id} className='space-y-6 border-2 rounded-4xl'>

          <div className='space-y-6 px-24 py-14 flex flex-col items-center'>
            <h3 className='text-2xl font-bold'>{item.word}</h3>

            <p className='font-medium'>Meaning / Pronunciation</p>

            <h3 className='text-2xl font-bold'>
              {item.meaning}
            </h3>
          </div>

          <div className='flex justify-between px-10 pb-6'>
            <span><Info /></span>
            <span><Volume2 /></span>
          </div>

        </div>

      ))}

    </div>
  )
}

export default LessonCard