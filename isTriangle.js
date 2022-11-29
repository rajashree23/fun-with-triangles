const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const isTriangle = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output-box");

function isTriangleHandler() {
  let sumOfAngles =
    parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value);
  if (sumOfAngles === 180) outputBox.innerText = "Congratulations, you have formed a triangle!";
  else outputBox.innerText = "Oops, it is not a triangle";
}

isTriangle.addEventListener("click", isTriangleHandler);
