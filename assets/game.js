const question = document.getElementById("question");
const choices = Array.from(document.querySelectorAll(".choice-option"));


let secondsLeft = 120;
const timeEl = document.querySelector(".timer");
// Define your quiz questions and correct answers
const quizQuestions = [
  {
    question: "Which is the definition of gyat?",
    choices: ["a gun", "a grape", "a video game", "a big booty"],
    correctAnswer: "a big booty"
  },
  {
    question: 'Choose the correct reponse to "wus good gang"',
    choices: ["yuh", "wus good bro", "suhhh dude", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: 'Another word for "hella"',
    choices: ["highkey", "bussin", "sus", "OT"],
    correctAnswer: "highkey"
  },
  {
    question: "Alfredo is looking hella fly in his brand new J's. How's ma boy lookin and feelin?",
    choices: ["weak as hell", "iced out", "dripped out", "snatched"],
    correctAnswer: "dripped out"
  },
  {
    question: "Scenario: Your homie just lied to you. He even said 'no cap'. What does that even mean?",
    choices: ["I don't have a hat...", "The lid fell off my soda-pop and I'm 90 years old.", "oreo is nasty, god >:(", "I'm definitely not lying!!!"],
    correctAnswer: "I'm definitely not lying!!!"
  },
  {
    question: "Fill in the blank: OMG Stargrasslemonzest! Your waist is _____, no cap!!",
    choices: ["lowkey", "sis", "snatched", "bussin"],
    correctAnswer: "snatched"
  },
  {
    question: "bbg (babygirl) just hit the griddy in an HEB. How would you respond to this?",
    choices: ["slay", "goat", "simp", "why would you hit that, rebecca???"],
    correctAnswer: "slay"
  },
  {
    question: "How do you think you did?",
    choices: ["GOATED", "OT", "I ATE", "All of the Above"],
    correctAnswer: "All of the Above"
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

  localStorage.setItem(`userAnswer_${currentQuestionIndex}`, currentQuestion.choices[userAnswer]);

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
    let correctAnswers = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
      const storedAnswer =localStorage.getItem(`userAnswer_${i}`);
      if (storedAnswer && storedAnswer === quizQuestions[i].correctAnswer) {
        correctAnswers++;
      }
    }
    //score out of 8
    let scoreFraction = `${correctAnswers}/${quizQuestions.length}`;

    alert(`You made it. Your score is ${scoreFraction}. Good job.`);

    let initials = prompt("Type in Initials to save your score.");

    localStorage.setItem("userScore", JSON.stringify({initials, scoreFraction}));

    
    window.location.href="highscores.html";
    console.log("Redirecting to highscores.html...");
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

