import React, { useRef } from "react";
import Widget from "../../components/Widget";
import QuizLogo from "../../components/QuizLogo";
import QuizBackground from "../../components/QuizBackground";
import GitHubCorner from "../../components/GitHubCorner";
import QuizContainer from "../../components/QuizContainer";
import AlternativeForm from "../../components/AlternativeForm";
import Button from "../../components/Button";
import BackLinkArrow from "../../components/BackLinkArrow";
import { Lottie } from "@crello/react-lottie";
import UnmuteButtonCorner from "../../components/UnmuteSoundButton";
import { motion } from "framer-motion";

import loadingAnimation from "./animations/loading.json";

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>Tela de Resultado:</h3>
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou {}
          {results.filter((x) => x).length} perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              #{index + 1} Resultado:
              {result === true ? "Acertou" : "Errou"}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>Carregando...</h3>
      </Widget.Header>

      <Widget.Content
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Widget.Content>
    </Widget>
  );
}

//GLOW
// p  {
//   animation: glow 3s ease-in-out infinite alternate;

//   @keyframes glow {
//     from {
//       text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #f8c4c4, 0 0 40px #ee7575, 0 0 50px #ea5252, 0 0 60px #e52929, 0 0 70px #e00000;

//     to {
//       text-shadow: 0 0 20px #ffffff, 0 0 30px #e00000, 0 0 40px #e52929, 0 0 50px #ea5252, 0 0 60px #ee7575, 0 0 70px #f8c4c4, 0 0 80px #f8c4c4;
//     }
//   }
// }
// }

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(
    undefined
  );
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const form = React.useRef();

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <hr></hr>
        <p>{question.description}</p>

        <AlternativeForm
          ref={form}
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
              form.current.reset();
              onSubmit();
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                key={alternativeId}
                as={motion.label}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                }}
                variants={{
                  show: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  type="radio"
                  id={alternativeId}
                  checked={hasAlternativeSelected}
                  name={alternative}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button
            type="submit"
            disabled={hasAlternativeSelected == false}
            text="Confirmar"
          />
          {isQuestionSubmited && isCorrect && <h3>Você acertou!</h3>}
          {isQuestionSubmited && !isCorrect && <h3>Você errou!</h3>}
        </AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};
export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;
  const videoRef = useRef();

  function addResult(result) {
    // results.push(result);
    setResults([...results, result]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    if (videoRef != undefined) {
      if (videoRef.current != undefined)
        if (videoRef.current.muted != undefined) videoRef.current.muted = false;
    }
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 3 * 2000);
    // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground
      backgroundImage={bg}
      videoSrc="/BattleScarifBackgroundVideo.mp4"
      videoReference={videoRef}
    >
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && (
          <LoadingWidget videoReference={videoRef} />
        )}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/darthrodolfo/aluraquiz-darthquiz" />
      <UnmuteButtonCorner videoReference={videoRef}></UnmuteButtonCorner>
    </QuizBackground>
  );
}
