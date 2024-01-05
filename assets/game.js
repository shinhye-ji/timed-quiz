const question = document.getElementById("question");
const choices = Array.from(document.querySelectorAll(".choice-option"));

let secondsLeft = 60;
const timeEl = document.querySelector(".timer");
// Define your quiz questions and correct answers
const quizQuestions = [
  {
    question: "Who is the best person to ever exist?",
    choices: ["audweeeeee", "guisep", "jasn", "jerm"],
    correctAnswer: "audweeeeee"
  },
  {
    question: "What is the capital of Texas?",
    choices: ["choice A", "Choice B", "Choice C", "Choice D"],
    correctAnswer: "Choice B"
  },
  {
    question: "What is the capital of Norway?",
    choices: ["choice A", "Choice B", "Choice C", "Choice D"],
    correctAnswer: "Choice B"
  }
  // Add more questions as needed
];

let currentQuestionIndex = 0;

// Function to display the current question and choices
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  question.textContent = currentQuestion.question;

  choices.forEach((choice, index) => {
    // choice.textContent = ${string.fromCharCode(65 + index)}. ${currentQuestion.choices[index]};
    console.log(choice, index);
    console.log(currentQuestion.choices[index]);
    choice.textContent = currentQuestion.choices[index];
  });
}

// Function to check the user's answer
function checkAnswer(selectedChoice) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const userAnswer = currentQuestion.choices.indexOf(selectedChoice);

console.log(currentQuestion.choices[userAnswer]);
console.log(currentQuestion.correctAnswer);
  if (currentQuestion.choices[userAnswer] === currentQuestion.correctAnswer) {
    // Handle correct answer
    alert("Correct! Well done.");
  } else {
    // Handle wrong answer
    alert(`Wrong! The correct answer is ${currentQuestion.correctAnswer}.`);
    secondsLeft = secondsLeft - 5;
  }

  // Move to the next question
  currentQuestionIndex++;
console.log(currentQuestionIndex);
console.log(quizQuestions.length);
  // Check if there are more questions
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    // Quiz completed
    let score = secondsLeft
    let initials = prompt("Quiz is complete. Type in initials to save high score.");
    localStorage.setItem("userScore", initials + ":" + score)
  }
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--; // secondsLeft = secondsLeft -1; // secondsLeft -= 1 // countdown
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        // sendMessage();
      }
  
    }, 1000);
}

// Add click event listeners to choices
choices.forEach(choice => {
  choice.addEventListener("click", () => checkAnswer(choice.textContent));
});

// Display the first question
displayQuestion();
setTime();

