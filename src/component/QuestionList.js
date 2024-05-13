import React from "react";
import Question from "./Question.js";
import { useQuizContext } from "../contexts/QuizContext.js";

export default function QuestionList() {
  const { questions, index } = useQuizContext();

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Question />
    </div>
  );
}
