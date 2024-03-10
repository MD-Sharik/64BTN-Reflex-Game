const btn1 = document.querySelectorAll("button"); // button
const Number1 = document.getElementById("number");
const score = document.getElementById("scorepoint");
const popup = document.querySelector(".pop");
popup.style.display = "none";
score.innerText = 0;

// Generate random new number for header
function newNum() {
  return Math.floor(Math.random() * 10);
}
Number1.innerHTML = newNum();
btn1.forEach((btn) => {
  btn.innerText = Math.floor(Math.random() * 10);
});

// Button Check and change if correct method
btn1.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === Number1.textContent) {
      Number1.innerHTML = newNum(); // adding new number
      btn1.forEach((btn1) => {
        btn1.innerHTML = newNum();
      });
      score.innerText++;
    } else {
      popup.style.display = "visible";
      console.log("popup");
    }
  });
});
