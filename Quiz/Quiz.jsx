import React, { useEffect, useRef, useState } from 'react';

export default function Quiz() {
    const Questions = [
        {
            question: "What is React?",
            options: ["Library", "Framework", "Language", "Tool"],
            answer: "Library"
        },
        {
            question: "What is JSX?",
            options: ["JavaScript", "XML", "Both", "None"],
            answer: "Both"
        },
        {
            question: "Which lifecycle method is called after the component is mounted?",
            options: ["componentDidMount", "componentWillMount", "render", "componentDidUpdate"],
            answer: "componentDidMount"
        },
        {
            question: "What does props stand for in React?",
            options: ["Properties", "Functions", "States", "Components"],
            answer: "Properties"
        },
        {
            question: "Which method is used to update the state in a class component?",
            options: ["setState", "updateState", "changeState", "modifyState"],
            answer: "setState"
        },
    ];

    const [Timer, setTimer] = useState(300);
    const [Pause, setPause] = useState(false);
    const timerRef = useRef(null);
    const [answer, setAnswer] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (!Pause && Timer > 0) {
            timerRef.current = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(timerRef.current);
                        SubmitQuiz();
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [Pause, Timer]);

    useEffect(() => {
        const save = localStorage.getItem("Answers");
        if (save) {
            setAnswer(JSON.parse(save));
        }
        const time = localStorage.getItem("Timing");
        if (time) {
            setTimer(JSON.parse(time));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Answers", JSON.stringify(answer));
    }, [answer]);

    useEffect(() => {
        localStorage.setItem("Timing", JSON.stringify(Timer));
    }, [Timer]);

    function PauseTimer() {
        setPause(true);
        clearInterval(timerRef.current);
    }

    function ResumeTimer() {
        if (Timer > 0) {
            setPause(false);
        }
    }

    function SubmitQuiz() {
        clearInterval(timerRef.current);
        let correctAnswers = 0;

        Questions.forEach((question, index) => {
            if (answer[index] === question.answer) {
                correctAnswers++;
            }
        });

        setScore(correctAnswers);
        alert("Quiz submitted!");

        setQuizCompleted(true);
        localStorage.removeItem("Answers");
        localStorage.removeItem("Timer");
        setAnswer({});
        setTimer(300);
    }

    const firstQuestion = useRef(null);
    useEffect(() => {
        if (firstQuestion.current) {
            firstQuestion.current.focus();
        }
    }, []);

    function answerChange(questionIndex, option) {
        setAnswer((prev) => ({
            ...prev,
            [questionIndex]: option,
        }));
    }

    return (
        <div>
            <h1>Quiz App</h1>
            <div>
                <h2>Time Remaining: {Timer} seconds</h2>
                <button onClick={PauseTimer}>Pause Timer</button>&nbsp;
                <button onClick={ResumeTimer}>Resume Timer</button><br /><br />
            </div>

            {
                Questions.map((el, questionIndex) => (
                    <div key={questionIndex}>
                        <h2 ref={questionIndex === 0 ? firstQuestion : null}>{el.question}</h2>
                        {
                            el.options.map((option, optionIndex) => (
                                <label key={optionIndex}>&nbsp;&nbsp;&nbsp;
                                    <input
                                        type="radio"
                                        value={option}
                                        onChange={() => answerChange(questionIndex, option)}
                                        checked={answer[questionIndex] === option}
                                    />
                                    {option}
                                </label>
                            ))
                        }
                    </div>
                ))
            }

            <br /> <button onClick={SubmitQuiz}>Submit Quiz</button>

            {quizCompleted && (
                <div style={{ marginTop: '20px', color: 'green' }}>
                    <h3>Quiz Completed! Your score: {score} out of {Questions.length}</h3>
                </div>
            )}
        </div>
    );
}