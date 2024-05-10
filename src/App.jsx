import Quiz from "./Quiz";
import { useEffect, useState } from "react";
function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
      );
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  return questions.length && <Quiz questions={questions} />;
}

export default App;
