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
  
 export const Questions = [
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
