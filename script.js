"use strict";
import {Questions} from './questions.js';
//Creating a currentQuestion which will change on cliking buttons

let currentQuestion;
currentQuestion = Questions.find((ques) => ques.quesNo === 1);

//Select all the selectors
const QuesLabel = document.querySelector(".mainQUes");
const buttons = document.querySelectorAll("button");
const submitBtn = document.querySelector(".AnsSubmit");
//Showing final scores
const finalSocreShow = document.querySelector(".FinalScore");
const finalScorelabel = document.querySelector(".showFinal");
const retest = document.querySelector(".ReTest");
const finish = document.querySelector(".finishBtn");
//Handling last next and previos buttons
const Question_btn = document.querySelector(".Question_btn");
const mainQUes = document.querySelector(".mainQUes");
const ansPos = document.querySelector(".ansPos");
const BtnNavigate = document.querySelector(".BtnNavigate");
const message = document.querySelector(".message");
const instruction = document.querySelector(".instruction");
//Checkbox

const clearAns = document.querySelector(".clear");
const checkBx = document.getElementsByName("q");

buttons.forEach(function (button) {
  button.addEventListener("click", showQuestions);
});
//Update questions after every click
const updateQuestions = function (n) {
  currentQuestion = Questions.find((ques) => ques.quesNo === n);
  showQuestionTemlate(currentQuestion);
};

let next = 1;

function showQuestions(event) {
  const clicked = event.target.value;
  message.innerHTML =
    "Selected an option and click on Submit button for each question";
  if (clicked == 1) {
    updateQuestions(1);
    console.log("clicked : " + clicked);
  }
  if (clicked == 2) {
    next = 2;
    updateQuestions(next);
  }
  if (clicked == 3) {
    next = 3;
    updateQuestions(next);
  } else if (clicked == 4) {
    next = 4;
    updateQuestions(next);
  } else if (clicked == 5) {
    next = 5;
    updateQuestions(next);
  } else if (clicked == 6) {
    next = 6;
    updateQuestions(next);
  } else if (clicked == 7) {
    next = 7;
    updateQuestions(next);
  } else if (clicked == 8) {
    next = 8;
    updateQuestions(next);
  } else if (clicked == 9) {
    next = 9;
    updateQuestions(next);
  } else if (clicked == 10) {
    next = 10;
    updateQuestions(next);
  } else if (clicked == 11) {
    next = 11;
    updateQuestions(next);
  } else if (clicked == 12) {
    next = 12;
    updateQuestions(next);
  } else if (clicked == 13) {
    next = 13;
    updateQuestions(next);
  } else if (clicked == 14) {
    next = 14;
    updateQuestions(next);
  } else if (clicked == 15) {
    next = 15;
    updateQuestions(next);
  } else if (clicked == 16) {
    next = 16;
    updateQuestions(next);
  } else if (clicked == 17) {
    next = 17;
    updateQuestions(next);
  } else if (clicked == 18) {
    next = 18;
    updateQuestions(next);
  } else if (clicked == 19) {
    next = 19;
    updateQuestions(next);
  } else if (clicked == 20) {
    next = 20;
    updateQuestions(next);
  } else if (clicked == "next") {
    if (next == 20) {
      updateQuestions(20);
    } else {
      next++;
      updateQuestions(next);
    }
  } else if (clicked == "previous") {
    if (next == 1) {
      updateQuestions(1);
    } else {
      next--;
      updateQuestions(next);
    }
  }
}

//create a current Question object which will check the question_no. and store its value
// Creating a javascript template literal
const showQuestionTemlate = function (ques) {
  QuesLabel.innerHTML = "";
  const htmlEl = `
  <div class="Question_container">
      <div class="Questions">${ques.question}</div>
      <div class="labels_container">
        <label class="label label1"
          ><input type="radio" name="q" class="radio_btn" id="opt1" value="${ques.options[0]}" />(A). <span>${ques.options[0]}</span> 
          </label>
        <label class="label label2"
        ><input type="radio" name="q" class="radio_btn" id="opt2" value="${ques.options[1]}"/>(B). <span>${ques.options[1]}</span></label
        >
        <label class="label label3">
          <input type="radio" name="q" class="radio_btn" id="opt3" value="${ques.options[2]}"/>(C). <span>${ques.options[2]}</span></label
        >
        <label class="label label4"
          ><input type="radio" name="q" class="radio_btn" id="opt4" value="${ques.options[3]}"/>(D). <span>${ques.options[3]}</span>
        </label>
      </div>
    </div>
    `;
  QuesLabel.insertAdjacentHTML("afterbegin", htmlEl);
  //   console.log("logged" + htmlEl);
};
const timeEl = document.querySelector(".time");
const startTimer = function () {
  let time = 1200;
  const tick = function () {
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    //In each call, print the remaining time or UI
    timeEl.textContent = `${minutes}:${sec}`;
//  console.log(time%60);
    // console.log(sec);
    
    if (time == 0) {
      clearInterval(timer);
      hideTestLabels();
      finalScorelabel.innerHTML = `Your Score is  : ${finalScore}`;
      finalScore = 0;
      arr = Array(21).fill(0);
      currentQuestion = Questions.find((ques) => ques.quesNo === 1);
      message.innerHTML =
        "Selected an option and click on Submit button for each question";
    }
    time--;
  };
  tick();
  timer = setInterval(tick, 1000);
  return timer;
};
/////////////////////////////////////////////
// Execution starts here
let timer;
function loadWindow() {
  showQuestionTemlate(currentQuestion);
  //If timer exists then clear the timer for another login
  if (timer) clearInterval(timer);
  timer = startTimer();
}
window.onload = loadWindow;

//////////////////////////////////////////////////////
//Handling the Radio buttons input, matching the options and updating the answer
let arr = Array(21).fill(0);
console.log(arr);
let finalScore = 0;
//Verify answer and updating the score array
const verifyAns = function (value) {
  if (value == currentQuestion.answer) arr[currentQuestion.quesNo] = 1;
  else arr[currentQuestion.quesNo] = 0;
};

submitBtn.addEventListener("click", function () {
  let val = "";
  console.log("clicked submit button");

  const option1 = document.getElementById("opt1");
  const option2 = document.getElementById("opt2");
  const option3 = document.getElementById("opt3");
  const option4 = document.getElementById("opt4");
  if (option1.checked == true) {
    val = option1.value;
    verifyAns(val);
  }
  if (option2.checked == true) {
    val = option2.value;
    verifyAns(val);
  }
  if (option3.checked == true) {
    val = option3.value;
    verifyAns(val);
  }
  if (option4.checked == true) {
    val = option4.value;
    verifyAns(val);
  }

  let score = 0;
  for (let x = 1; x <= Questions.length; x++) score += arr[x];
  finalScore = score;
  console.log("Your score is  : " + score);
  const res = val == currentQuestion.answer ? "Correct" : "Wrong";
  message.innerHTML =
    val != ""
      ? `You selected : ${val} <br> Correct Answer is :  ${currentQuestion.answer}<br> Status : ${res}`
      : `No selection`;
});

//If clicked on clear answer

clearAns.addEventListener("click", function () {
  for (let i = 0; i < checkBx.length; i++) {
    checkBx[i].checked = false;
  }
  message.innerHTML =
    "Selected an option and click on Submit button for each question";
});
/////////////////////////////////////////////////////
//Showing the score in  a new Page
finish.addEventListener("click", function () {
  clearInterval(timer);
  // timeEl.textContent = "00:00";
  hideTestLabels();
  finalScorelabel.innerHTML = `Your Score is  : ${finalScore}`;
});

retest.addEventListener("click", function () {
  //If timer exists then clear the timer for another login
  if (timer) clearInterval(timer);
  timer = startTimer();
  showTestLabels();
  finalScore = 0;
  arr = Array(21).fill(0);
  currentQuestion = Questions.find((ques) => ques.quesNo === 1);
  showQuestionTemlate(currentQuestion);
  message.innerHTML =
    "Selected an option and click on Submit button for each question";
});

retest.addEventListener("click", function () {});

const showTestLabels = function () {
  Question_btn.style.display = "block";
  mainQUes.style.display = "block";
  BtnNavigate.style.display = "grid";
  ansPos.style.display = "grid";
  instruction.style.display = "block";
  finalSocreShow.style.display = "none";
};

const hideTestLabels = function () {
  Question_btn.style.display = "none";
  mainQUes.style.display = "none";
  BtnNavigate.style.display = "none";
  ansPos.style.display = "none";
  instruction.style.display = "none";
  finalSocreShow.style.display = "grid";
};
