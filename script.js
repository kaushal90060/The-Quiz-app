"use strict";

const Question1 = {
  quesNo: 1,
  question: "(1). Which of the following is a logical operator?",
  options: ["!", "&&", "||", "All of the above"],
  answer: "All of the above",
};

const Question2 = {
  quesNo: 2,
  question: '(2). The format identifier "%i" is also used for _____ data type.',
  options: ["char", "int", "float", "double"],
  answer: "int",
};
const Question3 = {
  quesNo: 3,
  question:
    "(3). Which data type is most suitable for storing a number 65000 in a 32-bit system?",
  options: ["signed short", "unsigned short", "long", "int"],
  answer: "unsigned short",
};

const Question4 = {
  quesNo: 4,
  question: "(4). Which of the following is a User-defined data type?",
  options: [
    "typedef int Boolean;",
    "typedef enum {Mon, Tue, Wed, Thu, Fri} Workdays;",
    "struct {char name[10], int age};",
    "all of the mentioned",
  ],
  answer: "all of the mentioned",
};

const Question5 = {
  quesNo: 5,
  question: "(5). What is the size of an int data type?",
  options: [
    "4 Bytes",
    "8 Bytes;",
    "Depends on the system/compiler",
    "Cannot be determined",
  ],
  answer: "Depends on the system/compiler",
};

const Question6 = {
  quesNo: 6,
  question: "(6). What is short int in C programming?",
  options: [
    "The basic data type of C",
    "Qualifier",
    "Short is the qualifier and int is the basic data type",
    "All of the mentioned",
  ],
  answer: "Short is the qualifier and int is the basic data type",
};

const Question7 = {
  quesNo: 7,
  question: "(7). Which is correct with respect to the size of the data types?",
  options: [
    "char > int > float",
    "int > char > float",
    "char < int < double",
    "double > char > int",
  ],
  answer: "char < int < double",
};

const Question8 = {
  quesNo: 8,
  question: "(8). Which of the data types has the size that is variable?",
  options: ["int", "struct", "float", "double"],
  answer: "struct",
};

const Question9 = {
  quesNo: 9,
  question: "(9). enum types are processed by _________",
  options: ["Compiler", "Preprocessor", "Linker", "Assembler"],
  answer: "Compiler",
};

const Question10 = {
  quesNo: 10,
  question: "(10). Which of the following declaration is not supported by C?",
  options: [
    "String str;",
    "char *str;",
    "float str = 3e2;",
    "Both String str; & float str = 3e2;",
  ],
  answer: "String str;",
};

const Question11 = {
  quesNo: 11,
  question:
    "(11). Which keyword is used to prevent any changes in the variable within a C program?",
  options: ["immutable", "mutable", "const", "volatile"],
  answer: "const",
};

const Question12 = {
  quesNo: 12,
  question: "(12). Which of the following is not a pointer declaration?",
  options: [
    "char a[10];",
    "char a[] = {'1', '2', '3', '4'};",
    "char *str;",
    "char a;",
  ],
  answer: "char a;",
};

const Question13 = {
  quesNo: 13,
  question: "(13). Which of the following statement is false?",
  options: [
    "A variable defined once can be defined again with different scope;",
    "A single variable cannot be defined with two different types in the same scope",
    "A variable must be declared and defined at the same time",
    "A variable refers to a location in memory",
  ],
  answer: "A variable must be declared and defined at the same time",
};

const Question14 = {
  quesNo: 14,
  question: "(14). A variable declared in a function can be used in main().",
  options: [
    "True",
    "False",
    "True if it is declared static",
    "None of the mentioned",
  ],
  answer: "False",
};

const Question15 = {
  quesNo: 15,
  question:
    "(15). What is the precedence of arithmetic operators (from highest to lowest)?",
  options: [
    "%, *, /, +, –",
    " %, +, /, *, –",
    "+, -, %, *, /",
    "%, +, -, *, /",
  ],
  answer: "%, *, /, +, –",
};

const Question16 = {
  quesNo: 16,
  question: "(16). Which of the following is not an arithmetic operation?",
  options: ["a * = 10;", "a / = 10;", "a ! = 10;", "a % = 10;"],
  answer: "a ! = 10;",
};

const Question17 = {
  quesNo: 17,
  question:
    "(17). Which of the following data type will throw an error on modulus operation(%)?",
  options: ["char", "short", "int", "float"],
  answer: "float",
};

const Question18 = {
  quesNo: 18,
  question:
    "(18). Which among the following are the fundamental arithmetic operators, i.e, performing the desired operation can be done using that operator only?",
  options: ["+, –", "+, -, %", "+, -, *, /", "+, -, *, /, %"],
  answer: "+, –",
};

const Question19 = {
  quesNo: 19,
  question: "(19). Are logical operator sequence points?",
  options: [
    "True",
    "False",
    "Depends on the compiler",
    "Depends on the standard",
  ],
  answer: "True",
};

const Question20 = {
  quesNo: 20,
  question:
    "(20). Do logical operators in the C language are evaluated with the short circuit?",
  options: [
    "True",
    "False",
    "Depends on the compiler",
    "Depends on the standard",
  ],
  answer: "True",
};

// Question20 = {
//   question:
//     "Which among the following is NOT a logical or relational operator?",
//   options: ["!=", "==", "||", "="],
//   answer: "=",
// };

const Questions = [
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question15,
  Question16,
  Question17,
  Question18,
  Question19,
  Question20,
];
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
