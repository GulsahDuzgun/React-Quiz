import React from "react";
import { useQuizContext } from "../contexts/QuizContext.js";
export default function Question() {
  const { questions, dispatch, answer, index } = useQuizContext();

  return (
    <div className="options">
      {questions[index].options.map((option, indx) => (
        <button
          disabled={!!answer}
          className={`btn btn-option ${
            answer !== null
              ? indx === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          } ${answer === indx ? "answer" : ""} `}
          onClick={() => dispatch({ type: "questionAnswered", payload: indx })}
          key={indx}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
