const q1CreateBtn = document.querySelector(".q1-create-btn");
const q1ClearBtn = document.querySelector(".q1-clear-btn");
const arr = document.querySelector(".arr");

q1CreateBtn.addEventListener("click", () => {
  let to100 = [];
  let text = " ";

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

    text += `${to100[i]} `;
  }
  arr.innerHTML = text;
});
// function createPrime() {
//   let to100 = [];
//   let text = " ";
//   const no = 3;
//   for (prime = 3; prime < 10; prime++) {
//     if (!(prime % no === 0)) {
//       console.log(prime);

//       to100.push(prime);
//     }
//   }
//   console.log(to100);
// }

q1ClearBtn.addEventListener("click", () => {
  arr.innerHTML = "";
});

//q2
const q2CreateButton = document.querySelector(".q2-create-btn");
const q2ClearButton = document.querySelector(".q2-clear-btn");
const q2Input = document.querySelector(".q2-input");
const ans2 = document.querySelector(".ans2");

function createPattern() {
  ans2.innerText = "";
  const noOfRows = q2Input.value;
  for (i = 1; i <= noOfRows; i++) {
    for (j = 1; j <= i; j++) {
      ans2.innerText += "*";
    }
    ans2.innerText += "\n";
  }
  q2Input.value = "";
}

q2CreateButton.addEventListener("click", createPattern);
q2ClearButton.addEventListener("click", () => {
  ans2.innerHTML = "";
});

//Q3
const q3CreateButton = document.querySelector(".q3-create-btn");
const q3ClearButton = document.querySelector(".q3-clear-btn");
const q3Input = document.querySelector(".q3-input");
const ans3 = document.querySelector(".ans3");

function createTable() {
  ans3.innerHTML = " ";
  for (i = 1; i < 13; i++) {
    j = i * q3Input.value;
    ans3.innerText += ` ${j}`;
  }
  q3Input.value = "";
}

q3CreateButton.addEventListener("click", createTable);
q3ClearButton.addEventListener("click", () => {
  ans3.innerHTML = " ";
});

//Q4
const q4CreateButton = document.querySelector(".q4-create-btn");
const q4ClearButton = document.querySelector(".q4-clear-btn");
const q4Input = document.querySelector(".q4-input");
const ans4 = document.querySelector(".ans4");

function createSeries() {
  ans4.innerHTML = " ";
  let a = q4Input.value;
  let j = [0, 1];
  for (i = 0; j[i] <= a; i++) {
    ans4.innerText += ` ${j[i]}`;
    let lastNo = j[i + 1];
    let secondLastNo = j[i];
    let k = lastNo + secondLastNo;
    j.push(k);
  }
  q4Input.value = "";
}

q4CreateButton.addEventListener("click", createSeries);
q4ClearButton.addEventListener("click", () => {
  ans4.innerHTML = " ";
});

//Q5
const q5CreateButton = document.querySelector(".q5-create-btn");
const q5ClearButton = document.querySelector(".q5-clear-btn");
const q5Input = document.querySelector(".q5-input");
const ans5 = document.querySelector(".ans5");

function createFactorial() {
  let a = q5Input.value;
  ans5.innerHTML = " ";
  if (a < 0) {
    let mult = -1;
    for (i = -1; i >= a; i--) {
      mult = mult * i;
    }
    ans5.innerHTML += `Factorial of ${a} is ${mult}`;
  } else if (a > 0) {
    let mult = 1;
    for (i = 1; i <= a; i++) {
      mult = mult * i;
    }
    ans5.innerHTML += `Factorial of ${a} is ${mult}`;
  } else {
    ans5.innerHTML += `Enter valid Value`;
  }
  q5Input.value = "";
}
q5CreateButton.addEventListener("click", createFactorial);
q5ClearButton.addEventListener("click", () => {
  ans5.innerText = " ";
});

const q6CreateButton = document.querySelector(".q6-create-btn");
const q6ClearButton = document.querySelector(".q6-clear-btn");
const q6Input = document.querySelector(".q6-input");
const ans6 = document.querySelector(".ans6");

function checkPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function check() {
  ans6.innerText = "";
  let n = q6Input.value;
  if (n < 2) {
    ans6.innerText = `${n} is not a prime number`;
  } else if (checkPrime(n)) {
    ans6.innerText = `${n} is a prime number`;
  } else {
    ans6.innerText = `${n} is not a prime number`;
  }
}

q6CreateButton.addEventListener("click", check);
q6ClearButton.addEventListener("click", () => {
  ans6.innerText = " ";
});

//Q7

const q7CreateButton = document.querySelector(".q7-create-btn");
const q7ClearButton = document.querySelector(".q7-clear-btn");
const q7Input = document.querySelector(".q7-input");
const ans7 = document.querySelector(".ans7");

function toNumber(primes) {
  let num = q7Input.value;
  for (j = 2; j <= num; j++) {
    if (checkPrime(j)) {
      primes.push(j);
    }
  }
}

function printArray() {
  let primes = [];
  ans7.innerText = " ";
  toNumber(primes);
  for (let prime of primes) {
    ans7.innerText += ` ${prime}`;
  }
  q7Input.value = "";
}

q7CreateButton.addEventListener("click", printArray);
q7ClearButton.addEventListener("click", () => {
  ans7.innerText = " ";
});

const q8CreateButton = document.querySelector(".q8-create-btn");
const q8ClearButton = document.querySelector(".q8-clear-btn");
const q8Input = document.querySelector(".q8-input");
const ans8 = document.querySelector(".ans8");

function checkDay() {
  let day = q8Input.value.slice(0, 1);
  if (day == "s" || day == "S") {
    ans8.innerText = q8Input.value + " is weekend";
  } else {
    ans8.innerText = q8Input.value + " is weekday";
  }
  q8Input.value = "";
}

q8CreateButton.addEventListener("click", checkDay);
q8ClearButton.addEventListener("click", () => {
  ans8.innerText = " ";
});
