import { useEffect } from "react";
import { useQuizContext } from "../contexts/QuizContext.js";

export default function Timer() {
  const { remainTime, dispatch } = useQuizContext();
  const sec = remainTime % 60;
  const min = Math.floor(remainTime / 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "startTimer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min < 10 ? `0${min}` : `${min}`}:{sec < 10 ? `0${sec}` : `${sec}`}
    </div>
  );
}
