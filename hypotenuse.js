const sideInputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output-box");

function calSumOfSquares(a, b) {
  return a * a + b * b;
}
function calHypotenuse() {
  let sumOfSq = calSumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value));
  let hypotenuse=Math.sqrt(sumOfSq);
  output.innerText = `The length of the triangle is ${hypotenuse}`;
}

hypotenuseBtn.addEventListener("click", calHypotenuse);
