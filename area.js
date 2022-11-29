const sideInputs = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output-box");

function calArea() {
  let area = (Number(sideInputs[0].value) * Number(sideInputs[1].value)) / 2;
  output.innerText = `The length of the triangle is ${area}`;
}

areaBtn.addEventListener("click", calArea);
