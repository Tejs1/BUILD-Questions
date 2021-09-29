const q1CreateBtn = document.querySelector(".q1-create-btn");
const q1ClearBtn = document.querySelector(".q1-clear-btn");
const arr = document.querySelector(".arr");

q1CreateBtn.addEventListener("click", () => {
  let to100 = [];

  for (i = 0; i < 100; i++) {
    if ((i + 1) % 15 === 0) {
      to100[i] = "FizzBuzz";
    } else if ((i + 1) % 3 === 0) {
      to100[i] = "Fizz";
    } else if ((i + 1) % 5 === 0) {
      to100[i] = "Buzz";
    } else {
      to100[i] = i + 1;
    }

    arr.innerHTML += `${to100[i]} `;
  }
});

q1ClearBtn.addEventListener("click", () => {
  arr.innerHTML = "";
});
