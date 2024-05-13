import React from "react";
import { useQuizContext } from "../contexts/QuizContext";

export default function StarterScreen() {
  const { numQuestions, dispatch } = useQuizContext();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Let's start
      </button>
    </div>
  );
}
