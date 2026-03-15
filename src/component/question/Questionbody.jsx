import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Questions = () => {
  const data = [
  {
    question: "What is React and why is it used?",
    answer: "React is a JavaScript library for building user interfaces, primarily for single-page applications. It helps in creating reusable UI components and efficiently updates the UI when data changes."
  },
  {
    question: "What is the Virtual DOM in React?",
    answer: "The Virtual DOM is a lightweight copy of the real DOM. React uses it to update only the parts of the UI that have changed, improving performance and efficiency."
  },
  {
    question: "What are React Hooks and why are they useful?",
    answer: "React Hooks are functions that let you use state and other React features without writing a class. Examples are useState, useEffect, and useContext. They make code cleaner and easier to manage."
  },
  {
    question: "What is the difference between props and state in React?",
    answer: "Props are used to pass data from parent to child components and are read-only. State is used to store data within a component and can be updated by the component itself."
  },
  {
    question: "What is the significance of keys in React lists?",
    answer: "Keys help React identify which items have changed, are added, or removed in a list. Using unique keys improves rendering performance and prevents unnecessary re-renders."
  },
  {
    question: "What is JSX in React?",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML elements in JavaScript and makes React code more readable."
  }
];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mx-auto mt-10 space-y-4">
      {data.map((item, index) => (
        <div key={index} className="bg-[#F8F8F8] rounded-lg p-6">

          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="font-semibold">{item.question}</h3>
            {openIndex === index ? <Minus /> : <Plus />}
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-[#62748E] overflow-hidden"
              >
                {item.answer}
              </motion.p>
            )}
          </AnimatePresence>

        </div>
      ))}
    </div>
  );
};

export default Questions;
