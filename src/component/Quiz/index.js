import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions:[
              {
                  question: "What is 'hello' in French?",
                  options: ["Bonjour", "Bonsoir", "Salut"],
                  answer: 0
              },
              {
                  question: "How do you say 'goodbye' in French?",
                  options: ["Au revoir", "Adieu", "À bientôt"],
                  answer: 0
              },
              {
                  question: "What is 'thank you' in French?",
                  options: ["Merci", "S'il vous plaît", "Excusez-moi"],
                  answer: 0
              },
              {
                  question: "How do you say 'yes' in French?",
                  options: ["Oui", "Non", "Peut-être"],
                  answer: 0
              },
              {
                  question: "What is 'cat' in French?",
                  options: ["Chien", "Chat", "Oiseau"],
                  answer: 1
              },
              {
                  question: "How do you say 'water' in French?",
                  options: ["Feu", "Air", "Eau"],
                  answer: 2
              },
              {
                  question: "What is 'red' in French?",
                  options: ["Bleu", "Vert", "Rouge"],
                  answer: 2
              },
              {
                  question: "How do you say 'book' in French?",
                  options: ["Fleur", "Livre", "Maison"],
                  answer: 1
              },
              {
                  question: "What is 'one' in French?",
                  options: ["Deux", "Un", "Trois"],
                  answer: 1
              },
              {
                  question: "How do you say 'please' in French?",
                  options: ["Merci", "S'il vous plaît", "Excusez-moi"],
                  answer: 1
              }
          ],        
            currentQuestion: 0,
            timer: 10,
            timerInterval: null,
            score: 0,
            quizStarted: false,
            unattempted: 10,
        };
    }

    startQuiz = () => {
        this.setState({ quizStarted: true });
        this.loadQuestion();
        this.startTimer();
    };

    skipQuestion = () => {
        const { currentQuestion } = this.state;
        if (currentQuestion < this.state.questions.length) {
            this.nextQuestion()
        } else {
            this.endQuiz();
        }
    };

    endQuiz = () => {
      const { timerInterval, score, unattempted, questions } = this.state;
      clearInterval(timerInterval);
    
      // Calculate the final score and display results
      const attemptedQuestions = questions.length - unattempted;
      const finalScore = score;
    
      // You can add additional logic for displaying or submitting results here
    
      this.setState({
        quizStarted: false,
        timer: 10, // Reset the timer for the next quiz
      });
    
      // You can display the results here or do any other desired actions.
      // For example, you can show a message with the final score.
      alert(`Quiz ended! Your final score: ${finalScore} out of ${attemptedQuestions}`);
    };
    

  changeOption=()=>{

  }
  

  loadQuestion = () => {
    const { currentQuestion, questions } = this.state;
  
    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      return (
        <div id="question-container">
          <h4>{currentQuestion + 1}. {question.question}</h4>
          {question.options.map((option, index) => (
            <div className="form-check" key={index}>
              <input
                type="radio"
                name={`question${currentQuestion}`} // Use a unique name for each question
                id={`option${index}`}
                value={index}
              />
              <label className="btn btn-outline-success" htmlFor={`option${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      );
    }
  };
  
  

  startTimer = () => {
    const { timerInterval ,timer} = this.state;
    clearInterval(timerInterval);
    
    const newTimerInterval = setInterval(() => {
        this.setState((prevState) => {
            if (prevState.timer <= 0) {
                clearInterval(newTimerInterval); 
                this.nextQuestion();
                return { timer: 10 };
            }
            return { timer: prevState.timer - 1 };
        });
    }, 1000);

    this.setState({ timerInterval: newTimerInterval });
};

terminateQuiz=()=>{
  const{questions}=this.state
  this.setState({currentQuestion:questions.length})
}



nextQuestion = () => {
  const { currentQuestion, questions, timerInterval, score, unattempted } = this.state;
  clearInterval(timerInterval);
  this.setState({ timer: 10 });

  const selectedAnswer = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
  if (selectedAnswer !== null) {
    const selectedOption = selectedAnswer.value;

    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption == correctAnswer) {
      this.setState({ score: score + 1 });
    }
    this.setState({ unattempted: unattempted - 1 });
  }

  this.setState({ currentQuestion: currentQuestion + 1 }, () => {
    if (currentQuestion < questions.length) {
      this.loadQuestion();
      this.startTimer();
    } else {
      this.endQuiz();
    }
  });
};




    render() {
        const {  quizStarted,currentQuestion, unattempted, score,questions } = this.state;

        return (
          <div>
            <style>
              {`
                body {
                  background-color: #A7D397;
                }
        
                .quizbox {
                  background-color: #F5EEC8;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                  padding: 15px;
                  margin-top: 20px;
                }
                .doublbox {
                  background-color: #fff;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                  padding: 20px;
                }
        
                .question-container {
                  background-color: #F5EEC8;
                  padding: 0px;
                  border: 1px solid #dee2e6;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }
        
                .timer {
                  font-size: 24px;
                  font-weight: bold;
                }
        
                .options label {
                  font-size: 18px;
                }
        
                .btn-next, .btn-skip {
                  font-size: 18px;
                  margin-top: 20px;
                }
                .preface-box {
                  background-color: #F5EEC8;
                  color: #000;
                  border-radius: 5px;
                  padding: 15px;
                  margin-top: 20px;
                }
        
                .preface-button {
                  font-size: 20px;
                }
              `}
            </style>
            {quizStarted ? (
              currentQuestion >= questions.length ? (
                <div className="text-center container mt-4" id="scorebox" style={{ width: '50%', display: 'block' }}>
                  <h3>Your Score</h3>
                  <div className="container marksreport" id="marksreport" style={{ width: '65%' }}>
                    <h6>Attempted Questions: {this.state.questions.length - unattempted}</h6>
                    <h6>Your Score: {score}</h6>
                  </div>
                </div>
              ) : (
                <div className="container mt-4 quizbox" id="quizbox">
                  <div className="doublbox">
                    {this.loadQuestion()}
                  </div>
                  <div>
                    {/* Timer and buttons */}
                    <div>
                      <p>Timer: {this.state.timer}</p>
                      <button className="btn btn-primary mt-3 btn-skip"  onClick={this.nextQuestion}>Save & Next</button>
                      <button className='btn btn-secondary btn-next' onClick={this.skipQuestion}>Skip Question</button>
                    </div>
                    <button onClick={this.terminateQuiz} className="btn btn-danger btn-next preface-button">End Quiz</button>
                  </div>
                </div>
              )
            ) : (
              <div className="preface-box text-center container mt-4" style={{ width: '50%' }}>
                <div className="doublbox">
                  <h3>Welcome to the French Language Quiz</h3>
                  <div>
                    <h6 style={{ color: 'red' }} className="font-weight-bold">
                      Before you start, please read the rules:
                    </h6>
                    <ol>
                      <li>Each question has a 10-second timer.</li>
                      <li>Choose the correct answer from the options.</li>
                    </ol>
                  </div>
                  <button onClick={this.startQuiz} className="btn btn-primary preface-button">
                    Start Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        );
        
    }
}

export default Quiz;
