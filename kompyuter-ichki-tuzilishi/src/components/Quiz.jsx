import { useState } from "react";
import { quiz } from "../data/content";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = quiz[step];
  const progress = ((step + (picked !== null ? 1 : 0)) / quiz.length) * 100;

  const choose = (index) => {
    if (picked !== null) return;
    setPicked(index);
    if (index === question.answer) setScore((value) => value + 1);
  };

  const next = () => {
    if (step + 1 >= quiz.length) {
      setDone(true);
    } else {
      setStep(step + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setStep(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const percent = Math.round((score / quiz.length) * 100);
    const message =
      percent === 100
        ? "Ajoyib! Siz kompyuter ichki tuzilishini mukammal bilasiz."
        : percent >= 70
          ? "Yaxshi natija! Bir nechta mavzuni takrorlash kifoya."
          : percent >= 40
            ? "Yaxshi boshlanish. Sxema va qurilmalar bo'limini qayta ko'ring."
            : "Xafa bo'lmang — bo'limlarni o'qib, testni yana bir bor sinab ko'ring.";

    return (
      <div className="quiz-result">
        <div className="score-ring" style={{ "--score": `${percent}%` }}>
          <div className="score-inner">
            <b>{percent}%</b>
            <span>
              {score} / {quiz.length}
            </span>
          </div>
        </div>
        <h3>Test yakunlandi</h3>
        <p>{message}</p>
        <button className="btn primary" type="button" onClick={restart}>
          Qaytadan boshlash
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-top">
        <span className="quiz-count">
          Savol {step + 1} / {quiz.length}
        </span>
        <span className="quiz-score">Ball: {score}</span>
      </div>
      <div className="bar">
        <span style={{ width: `${progress}%` }} />
      </div>

      <h3 className="quiz-question">{question.q}</h3>

      <div className="options">
        {question.options.map((option, index) => {
          let state = "";
          if (picked !== null) {
            if (index === question.answer) state = " is-correct";
            else if (index === picked) state = " is-wrong";
          }
          return (
            <button
              key={option}
              type="button"
              className={`option${state}`}
              onClick={() => choose(index)}
              disabled={picked !== null}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className={`explain${picked === question.answer ? " ok" : " bad"}`}>
          <strong>
            {picked === question.answer ? "To'g'ri!" : "Noto'g'ri."}
          </strong>{" "}
          {question.explain}
        </div>
      )}

      <div className="quiz-actions">
        <button
          className="btn primary"
          type="button"
          onClick={next}
          disabled={picked === null}
        >
          {step + 1 === quiz.length ? "Natijani ko'rish" : "Keyingi savol"}
        </button>
      </div>
    </div>
  );
}
