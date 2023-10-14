// Get the form and results div from the HTML
const form = document.getElementById("quiz-form");
const resultsDiv = document.getElementById("quiz-results");

// Array to store quiz questions and correct answers
const questions = [
  {
    question: "What is the capital of France?",
    correctAnswer: "paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    correctAnswer: "mars",
  },
  {
    question: "What is the largest mammal in the world?",
    correctAnswer: "blue-whale",
  },
];

// Function to calculate the user's score
function calculateScore() {
  let score = 0;

  // Loop through each question in the form
  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const userAnswer = form.elements[`q${i + 1}`].value.toLowerCase(); // Convert user answer to lowercase for case insensitivity

    // Check if the user's answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  }

  // Calculate the final score as a percentage
  const finalScore = Math.floor((score / questions.length) * 100);

  return finalScore;
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Calculate the user's final score
  const finalScore = calculateScore();

  // Display the results
  resultsDiv.style.display = "block";
  document.getElementById("score").textContent = `Your Score: ${finalScore}%`;

  // Reset the form
  form.reset();
}

// Event listener for form submission
form.addEventListener("submit", handleFormSubmit);
