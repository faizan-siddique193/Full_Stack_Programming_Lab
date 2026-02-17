// Questions and Answers stored in separate variables
var question1 = "What is the capital of France?";
var answer1 = "paris";

var question2 = "What is 5 + 7?";
var answer2 = "12";

var question3 = "What planet is known as the Red Planet?";
var answer3 = "mars";

var question4 = "How many days are in a week?";
var answer4 = "7";

var question5 = "What is the largest ocean on Earth?";
var answer5 = "pacific";

// Input validation function
function validateInputs() {
  var inputs = [
    document.getElementById("q1").value.trim(),
    document.getElementById("q2").value.trim(),
    document.getElementById("q3").value.trim(),
    document.getElementById("q4").value.trim(),
    document.getElementById("q5").value.trim(),
  ];

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] === "") {
      return false;
    }
  }
  return true;
}

// Function to check answer 1
function checkAnswer1() {
  var userAnswer = document.getElementById("q1").value.toLowerCase().trim();
  return userAnswer === answer1;
}

// Function to check answer 2
function checkAnswer2() {
  var userAnswer = document.getElementById("q2").value.toLowerCase().trim();
  return userAnswer === answer2;
}

// Function to check answer 3
function checkAnswer3() {
  var userAnswer = document.getElementById("q3").value.toLowerCase().trim();
  return userAnswer === answer3;
}

// Function to check answer 4
function checkAnswer4() {
  var userAnswer = document.getElementById("q4").value.toLowerCase().trim();
  return userAnswer === answer4;
}

// Function to check answer 5
function checkAnswer5() {
  var userAnswer = document.getElementById("q5").value.toLowerCase().trim();
  return userAnswer === answer5;
}

// Function to calculate total score
function calculateScore() {
  var score = 0;

  if (checkAnswer1()) score++;
  if (checkAnswer2()) score++;
  if (checkAnswer3()) score++;
  if (checkAnswer4()) score++;
  if (checkAnswer5()) score++;

  return score;
}

// Function to display results using DOM manipulation
function displayResults() {
  var resultsDiv = document.getElementById("results");

  // Validate inputs before calculating score
  if (!validateInputs()) {
    resultsDiv.className = "";
    resultsDiv.innerHTML =
      "<p>Please answer all questions before submitting.</p>";
    resultsDiv.classList.add("show", "poor");
    return;
  }

  var score = calculateScore();
  var message = "";

  // Remove previous classes
  resultsDiv.className = "";

  // Conditional statements to display messages based on score
  if (score === 5) {
    message = "Excellent! Perfect score!";
    resultsDiv.classList.add("excellent");
  } else if (score >= 3) {
    message = "Good job! Keep practicing!";
    resultsDiv.classList.add("good");
  } else {
    message = "Keep trying! You can do better!";
    resultsDiv.classList.add("poor");
  }

  // Display results dynamically
  resultsDiv.innerHTML =
    "<p><strong>Score: " + score + " / 5</strong></p><p>" + message + "</p>";
  resultsDiv.classList.add("show");
}

// Function to reset quiz
function resetQuiz() {
  // Clear all inputs
  document.getElementById("q1").value = "";
  document.getElementById("q2").value = "";
  document.getElementById("q3").value = "";
  document.getElementById("q4").value = "";
  document.getElementById("q5").value = "";

  // Hide results
  var resultsDiv = document.getElementById("results");
  resultsDiv.className = "";
  resultsDiv.innerHTML = "";
}

// Event listeners
document.getElementById("submitBtn").addEventListener("click", displayResults);
document.getElementById("resetBtn").addEventListener("click", resetQuiz);
