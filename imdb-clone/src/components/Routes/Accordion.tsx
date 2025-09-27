import { useState } from "react";
import React from "react";
const Accordion = ({ actors, imdbRating }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="accordion py-4 border  border-gray-300 rounded-md mb-4 shadow-lg">
        <div className="accordion-header flex" onClick={toggleAccordion}>
          <h3 className="text-2xl font-semibold">Cast</h3>

          <span className="text-2xl">{isOpen ? "▲" : "▼"}</span>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="accordion-content bg-white-300 p-3">{actors}</div>
        )}
      </div>
    </>
  );
};

export default Accordion;
