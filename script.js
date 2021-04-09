"use strict";
const quizContainer = document.getElementById("question-container");
const mainQuestion = document.getElementById("main-Question");
const mainLabel = document.getElementById("main-Label");
const button = document.getElementById("button");
const buttTwo = document.getElementById("buttonTwo");
const answerMain = document.querySelector(".answers");
const form = document.querySelector(".form-container");
const scoreCard = document.querySelector(".scoreCard");

const question1 = {
  question: "How many seasons of Friends are there?",
  answers: [10, 11, 8],
  correctAnswer: 10
};

const question2 = {
  question:
    "What was the name of the first restaurant Monica was head chef at?",
  answers: ["Iridium", "Alessandro’s", "Manhattan Restaurant"],
  correctAnswer: "Alessandro’s"
};

const question3 = {
  question: "What animal does Chanler not like?",
  answers: ["Cats", "Dogs", "Birds"],
  correctAnswer: "Dogs"
};

const question4 = {
  question: "How many sisters does Joey have?",
  answers: [4, 5, 7],
  correctAnswer: 7
};

const friendsQuestions = [question1, question2, question3, question4];

let score = 0;
// let currentQuestion;

let randNum = function() {
  return Math.floor(Math.random() * friendsQuestions.length);
};

let currentQuestion = friendsQuestions[randNum()];

//---------------------------------------------------------------------------
button.addEventListener("click", function(e) {
  const html = `<p id="main-Question" class="question">${currentQuestion.question}</p >`;
  quizContainer.insertAdjacentHTML("beforeend", html);

  showAnswer(currentQuestion.answers);
  button.classList.add("noShow");
  buttTwo.classList.remove("noShow");
});

//---------------------------------------------------------------------------

const showAnswer = function(answerList) {
  const answerOptions = answerList.map((ans, i) => {
    return `<input class="inputClass" type="radio" name="question" id="${i}" value="${ans}" /> <label for="" id="main-Label">${ans}</label>`;
  });

  quizContainer.insertAdjacentHTML("beforeend", answerOptions);
};

//---------------------------------------------------------------------------

buttTwo.addEventListener("click", function(e) {
  const Ans = document.querySelector("input[name='question']:checked").value;
  const index = friendsQuestions.indexOf(currentQuestion);

  if (index > -1) {
    friendsQuestions.splice(index, 1);
    // console.log(friendsQuestions);
  } else {
    console.log("GAME HAS ENDED");
  }

  if (Ans == currentQuestion.correctAnswer) {
    // console.log("Correct!");
    score = score + 1;
    scoreCard.textContent = `Score: ${score}`;
    // console.log(score);
  } else {
    // console.log(`sorry, the answer is ${currentQuestion.correctAnswer}`);
    // console.log(score);
  }

  quizContainer.innerHTML = "";
  currentQuestion = friendsQuestions[randNum()];

  const html = `<p id="main-Question" class="question">${currentQuestion.question}</p >`;
  quizContainer.insertAdjacentHTML("beforeend", html);

  showAnswer(currentQuestion.answers);
});
