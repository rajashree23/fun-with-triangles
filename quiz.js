const submitQuiz = document.querySelector("#submit-answer-btn");
const quizForm = document.querySelector(".quiz-form");
const outputEl = document.querySelector("#output-box");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  let score = 0,
    i = 0;
  const formResults = new FormData(quizForm);
  for (let entry of formResults.values()) {
    if (entry === correctAnswers[i]) score++;
    i++;
  }
  outputEl.innerText=`Your score is ${score}`

}

submitQuiz.addEventListener("click", calculateScore);
