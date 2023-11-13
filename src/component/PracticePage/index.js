

import React, { Component } from 'react';
import NavBar from '../NavBar';
import newspaperSolid from "../../img/newspaper-solid.svg";

const questions = [
  {
    question: "What is 'hello' in French?",
    options: ["Bonjour", "Bonsoir", "Salut"],
    answer: 0,
  },
  {
    question: "How do you say 'goodbye' in French?",
    options: ["Au revoir", "Adieu", "À bientôt"],
    answer: 0,
  },
  {
    question: "What is 'thank you' in French?",
    options: ["Merci", "S'il vous plaît", "Excusez-moi"],
    answer: 0,
  },
  {
    question: "How do you say 'yes' in French?",
    options: ["Oui", "Non", "Peut-être"],
    answer: 0,
  },
  {
    question: "What is 'cat' in French?",
    options: ["Chien", "Chat", "Oiseau"],
    answer: 1,
  },
  {
    question: "How do you say 'water' in French?",
    options: ["Feu", "Air", "Eau"],
    answer: 2,
  },
  {
    question: "What is 'red' in French?",
    options: ["Bleu", "Vert", "Rouge"],
    answer: 2,
  },
  {
    question: "How do you say 'book' in French?",
    options: ["Fleur", "Livre", "Maison"],
    answer: 1,
  },
  {
    question: "What is 'one' in French?",
    options: ["Deux", "Un", "Trois"],
    answer: 1,
  },
  {
    question: "How do you say 'please' in French?",
    options: ["Merci", "S'il vous plaît", "Excusez-moi"],
    answer: 1,
  },
];
class PracticeQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswers: new Array(questions.length).fill(null),
    };
  }

  handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...this.state.selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    this.setState({ selectedAnswers: newSelectedAnswers });
  };

  checkAnswers = () => {
    const feedback = this.state.selectedAnswers.map((selectedAnswer, questionIndex) => {
      const correctAnswer = questions[questionIndex].answer;
      return selectedAnswer === correctAnswer;
    });
    return feedback;
  };

  render() {
    const quizStyles = {
      body: {
        backgroundColor: '#A7D397',
      },
      cont: {
        backgroundColor: '#F5EEC8',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        marginTop: '20px',
      },
      questionContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        border: '1px solid #dee2e6',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
      },
      optionsLabel: {
        fontSize: '18px',
      },
      correctAnswer: {
        color: 'green',
      },
      wrongAnswer: {
        color: 'red',
      },
      optionBox: {
        border: '2px solid black',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px 0',
        display: 'flex',
        justifyContent: 'space-between',
      },
      correctOption: {
        borderColor: 'green',
      },
      selectedOption: {
        borderColor: 'orange',
      },
      feedbackIcon: {
        fontSize: '18px',
        display: 'none',
      },
      correctIcon: {
        color: 'green',
      },
      wrongIcon: {
        color: 'red',
      },
    };
  

    return (
      <>
        <style>
        {`
        body {
          background-color: ${quizStyles.body.backgroundColor};
        }
        .cont {
          background-color: ${quizStyles.cont.backgroundColor};
          border-radius: ${quizStyles.cont.borderRadius};
          box-shadow: ${quizStyles.cont.boxShadow};
          padding: ${quizStyles.cont.padding};
          margin-top: ${quizStyles.cont.marginTop};
        }
        .question-container {
          background-color: ${quizStyles.questionContainer.backgroundColor};
          padding: ${quizStyles.questionContainer.padding};
          border: ${quizStyles.questionContainer.border};
          border-radius: ${quizStyles.questionContainer.borderRadius};
         box-shadow: ${quizStyles.questionContainer.boxShadow};
        }
        .options-label {
          font-size: ${quizStyles.optionsLabel.fontSize};
        }
        .correct-answer {
          color: ${quizStyles.correctAnswer.color};
        }
        .wrong-answer {
          color: ${quizStyles.wrongAnswer.color};
        }
        .option-box {
          border: ${quizStyles.optionBox.border};
          padding: ${quizStyles.optionBox.padding};
          border-radius: ${quizStyles.optionBox.borderRadius};
          margin: ${quizStyles.optionBox.margin};
          display: ${quizStyles.optionBox.display};
          justify-content: ${quizStyles.optionBox.justifyContent};
        }
        .correct-option {
          border-color: ${quizStyles.correctOption.borderColor};
        }
        .selected-option {
          border-color: ${quizStyles.selectedOption.borderColor};
        }
        .feedback-icon {
          font-size: ${quizStyles.feedbackIcon.fontSize};
          display: ${quizStyles.feedbackIcon.display};
        }
        .correct-icon {
          color: ${quizStyles.correctIcon.color};
        }
        .wrong-icon {
          color: ${quizStyles.wrongIcon.color};
        }
      `}
      </style>
        <NavBar />
        <div className="container cont">
          <div></div>
          <div className="d-flex justify-content-center">
            <h2>
              <img src={newspaperSolid} alt="" height="30px" width="30px" /> Practice Quiz
            </h2>
          </div>
          <br />

          <div className="question-container" id="questions-container">
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="question-contain">
                <h4>{question.question}</h4>
                <div className="options">
                  {question.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className={`option-box ${
                        this.state.selectedAnswers[questionIndex] === optionIndex ? 'selected-option' : ''
                      } ${question.answer === optionIndex ? 'correct-option' : ''}`}
                    >
                      {option}
                      <input
                        type="radio"
                        name={`answer${questionIndex}`}
                        value={optionIndex}
                        onChange={() => this.handleOptionChange(questionIndex, optionIndex)}
                      />
                      <span
                        className={`feedback-icon correct-icon ${
                          this.state.selectedAnswers[questionIndex] === optionIndex ? '' : 'd-none'
                        }`}
                      >
                        &#10004;
                      </span>
                      <span
                        className={`feedback-icon wrong-icon ${
                          this.state.selectedAnswers[questionIndex] !== optionIndex ? '' : 'd-none'
                        }`}
                      >
                        &#10008;
                      </span>
                    </label>
                  ))}
                </div>
                <br />
              </div>
            ))}
          </div>

          <button
            id="check-answers"
            className="btn btn-primary btn-next mt-3"
            onClick={this.checkAnswers}
          >
            Check Answers
          </button>
        </div>
      </>
    );
  }
}

export default PracticeQuiz;