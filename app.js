const outputDiv = document.querySelector(".output");
const clearBtns = document.querySelectorAll(".clear-btn");
const q1CreateBtn = document.querySelector(".q1-create-btn");

clearBtns.forEach(button =>{
button.addEventListener("click", () => {
  outputDiv.innerText = "";
})
})



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
  outputDiv.innerText = text;
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


//q2
const q2CreateButton = document.querySelector(".q2-create-btn");
const q2Input = document.querySelector(".q2-input");


function createPattern() {
  outputDiv.innerText = "";
  const noOfRows = q2Input.value;
  for (i = 1; i <= noOfRows; i++) {
    for (j = 1; j <= i; j++) {
      outputDiv.innerText += "*";
    }
    outputDiv.innerText += "\n";
  }
  q2Input.value = "";
}

q2CreateButton.addEventListener("click", createPattern);


//Q3
const q3CreateButton = document.querySelector(".q3-create-btn");
const q3Input = document.querySelector(".q3-input");


function createTable() {
  outputDiv.innerHTML = " ";
  for (i = 1; i < 13; i++) {
    j = i * q3Input.value;
    outputDiv.innerText += ` ${j}`;
  }
  q3Input.value = "";
}

q3CreateButton.addEventListener("click", createTable);


//Q4
const q4CreateButton = document.querySelector(".q4-create-btn");
const q4Input = document.querySelector(".q4-input");


function createSeries() {
  outputDiv.innerHTML = " ";
  let a = q4Input.value;
  let j = [0, 1];
  for (i = 0; j[i] <= a; i++) {
    outputDiv.innerText += ` ${j[i]}`;
    let lastNo = j[i + 1];
    let secondLastNo = j[i];
    let k = lastNo + secondLastNo;
    j.push(k);
  }
  q4Input.value = "";
}

q4CreateButton.addEventListener("click", createSeries);


//Q5
const q5CreateButton = document.querySelector(".q5-create-btn");
const q5Input = document.querySelector(".q5-input");


function createFactorial() {
  let a = q5Input.value;
  outputDiv.innerHTML = " ";
  if (a < 0) {
    let mult = -1;
    for (i = -1; i >= a; i--) {
      mult = mult * i;
    }
    outputDiv.innerHTML += `Factorial of ${a} is ${mult}`;
  } else if (a > 0) {
    let mult = 1;
    for (i = 1; i <= a; i++) {
      mult = mult * i;
    }
    outputDiv.innerHTML += `Factorial of ${a} is ${mult}`;
  } else {
    outputDiv.innerHTML += `Enter valid Value`;
  }
  q5Input.value = "";
}
q5CreateButton.addEventListener("click", createFactorial);
clearButton.addEventListener("click", () => {
  outputDiv.innerText = " ";
});

const q6CreateButton = document.querySelector(".q6-create-btn");
const q6Input = document.querySelector(".q6-input");


function checkPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function check() {
  outputDiv.innerText = "";
  let n = q6Input.value;
  if (n < 2) {
    outputDiv.innerText = `${n} is not a prime number`;
  } else if (checkPrime(n)) {
    outputDiv.innerText = `${n} is a prime number`;
  } else {
    outputDiv.innerText = `${n} is not a prime number`;
  }
}

q6CreateButton.addEventListener("click", check);
clearButton.addEventListener("click", () => {
  outputDiv.innerText = " ";
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
  if(day == ""){
    outputDiv.innerText = "Enter Day"
  }else if (day == "s" || day == "S") {
    outputDiv.innerText = q8Input.value + " is weekend";
  } else {
    outputDiv.innerText = q8Input.value + " is weekday";
  }
  q8Input.value = "";
}

q8CreateButton.addEventListener("click", checkDay);
q8ClearButton.addEventListener("click", () => {
  ans8.innerText = " ";
});
