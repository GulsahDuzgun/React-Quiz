import Header from "./Header.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StarterScreen from "./StarterScreen.js";
import Main from "./Main.js";
import QuestionList from "./QuestionList.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import FinishScreen from "./FinishScreen.js";
import Timer from "./Timer.js";
import Footer from "./Footer.js";
import { useQuizContext } from "../contexts/QuizContext.js";

function App() {
  const { status } = useQuizContext();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StarterScreen />}
        {status === "active" && (
          <>
            <Progress />
            <QuestionList />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
