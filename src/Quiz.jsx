import React, { useState } from "react";
import "./Quiz.css"; // Import your CSS file for styling

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(10).fill(null));

  const handleClick = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Logic to determine the best outfit based on answers
    console.log("Selected answers:", answers);
    // Example logic: Determine and display the recommended outfit
    // For simplicity, I'll just log it here.
    console.log("Recommended outfit:", determineOutfit(answers));
  };

  const determineOutfit = (answers) => {
    // Example logic: Determine based on user's answers
    // This can be customized based on specific criteria or preferences
    // For demonstration, returning a hardcoded outfit.
    return "Recommended outfit: Bridal Lehenga";
  };

  const questions = [
    {
      question: "What is the occasion?",
      options: ["Wedding", "Party", "Festival", "Casual outing"],
    },
    {
      question: "Which fabric do you prefer?",
      options: ["Silk", "Chiffon", "Georgette", "Velvet"],
    },
    {
      question: "Which style do you like?",
      options: ["Traditional", "Designer", "Modern", "Ethnic"],
    },
    {
      question: "Which color do you prefer?",
      options: ["Red", "Blue", "Pink", "Gold"],
    },
    {
      question: "Which type of embroidery do you prefer?",
      options: ["Zardozi", "Chikankari", "Phulkari", "Mirror work"],
    },
    {
      question: "Which region-inspired outfit do you prefer?",
      options: ["Banarasi", "Kanjivaram", "Pochampally", "Chanderi"],
    },
    {
      question: "Which type of draping style do you prefer?",
      options: ["Lehenga", "Saree", "Lehenga Saree", "Dupatta"],
    },
    {
      question: "Which pattern do you like?",
      options: ["Floral", "Geometric", "Paisley", "Abstract"],
    },
    {
      question: "Which occasion-specific outfit do you prefer?",
      options: [
        "Bridal Lehenga",
        "Party Wear Saree",
        "Designer Salwar Kameez",
        "Silk Dupatta",
      ],
    },
    {
      question: "Which accessory would you prefer to complement your outfit?",
      options: [
        "Statement Necklace",
        "Embroidered Clutch",
        "Ethnic Bangles",
        "Traditional Jutti",
      ],
    },
  ];

  return (
    <div className="quiz-container">
      <h1>Find Your Perfect Outfit Quiz</h1>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="question">
          <h2>{q.question}</h2>
          <div className="options">
            {q.options.map((option, oIndex) => (
              <div
                key={oIndex}
                className={`option ${
                  answers[qIndex] === oIndex ? "selected" : ""
                }`}
                onClick={() => handleClick(qIndex, oIndex)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
