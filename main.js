import data from "./data.json" assert { type: "json"};

console.log(data)

var quizContainer = document.getElementById("quiz-container");
var currentIndex = 0; // Curren quiz index
var correctAnswers = 0; // Correct answers


//Create Quiz
function createQuiz() {
  var question = data.questions[currentIndex];

  var questionElement = document.createElement("div");
  questionElement.innerHTML = "<p>" + question.question + "</p>";

  question.options.forEach(function (option) {
    var optionElement = document.createElement("input");
    optionElement.type = "radio";
    optionElement.name = "questionn";
    optionElement.value = option;

    var labelElement = document.createElement("label");
    labelElement.innerHTML = option;

    questionElement.appendChild(optionElement);
    questionElement.appendChild(labelElement);
    questionElement.appendChild(document.createElement("br"));
  });

  quizContainer.innerHTML = ""; // Clear previous question
  quizContainer.appendChild(questionElement);

  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.onclick = evaluateQuiz;

  quizContainer.appendChild(submitButton);
}

// Evaluate Quiz
function evaluateQuiz() {
  var selectedOption = document.querySelector('input[name="questionn"]:checked');
  if (selectedOption) {
    var userAnswer = selectedOption.value;
    var correctAnswer = data.questions[currentIndex].correctAnswer;

    // Ccheck
    if (userAnswer === correctAnswer) {
      correctAnswers++;
    }

    // Pass another
    currentIndex++;

    // If finshed all questions
    if (currentIndex < data.questions.length) {
      // Create new question
      createQuiz();
    } else {
      // Quiz is completed
      alert( "Correct answers:" + correctAnswers);

    }
  } else {
    alert("Please choose variant!");
  }
}

// Crate quiz and show
createQuiz();





