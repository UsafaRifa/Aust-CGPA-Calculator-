console.log("f");
var f = 0;
let c = 0;
let cc1 = 0;
let double = 0;
let sem = 0;
let table;
let two;
let one;
let delete_activator = 0;

function one1() {
  location.href = "Calculator.html";
  localStorage.setItem("active", "1");
}
function one2() {
  location.href = "Calculator.html";
  localStorage.setItem("active", "2");
}
function one3() {
  location.href = "Calculator.html";
  localStorage.setItem("active", "3");
}
function one4() {
  location.href = "Calculator.html";
  localStorage.setItem("active", "4");
}
function one5() {
  //3.1

  location.href = "Calculator.html";
  localStorage.setItem("active", "5");
}
function one6() {
  //3.2

  location.href = "Calculator.html";
  localStorage.setItem("active", "6");
}
function one7() {
  //4.1

  location.href = "Calculator.html";
  localStorage.setItem("active", "7");
}
function one8() {
  //4.2

  location.href = "Calculator.html";
  localStorage.setItem("active", "8");
}

//start from calculator.html

if (parseInt(localStorage.getItem("active")) == 1) {
  one_1();

  localStorage.setItem("active", "0");
} else if (parseInt(localStorage.getItem("active")) == 2) {
  one_2();
  localStorage.setItem("active", "0");
} else if (parseInt(localStorage.getItem("active")) == 3) {
  one_3();
  localStorage.setItem("active", "0");
} else if (parseInt(localStorage.getItem("active")) == 4) {
  one_4();
  localStorage.setItem("active", "0");
} else if (parseInt(localStorage.getItem("active")) == 5) {
  one_5();
  localStorage.setItem("active", "0");
} else if (parseInt(localStorage.getItem("active")) == 6) {
  one_6();
  localStorage.setItem("active", "0");
} else if (parseInt(localStorage.getItem("active")) == 7) {
  one_7();
  localStorage.setItem("active", "0");
}
else if (parseInt(localStorage.getItem("active")) == 8) {
  one_8();
  localStorage.setItem("active", "0");
}

function one_1() {
  //1.1

  header.innerHTML = `1st Year 2nd Semester`;
  p1.innerHTML = `Mathematicsi-I`;
  c1.innerHTML = 3;
  p2.innerHTML = `Critical Thinking & Communication`;
  c2.innerHTML = 3;
  p3.innerHTML = `Physics`;
  c3.innerHTML = 3;
  p4.innerHTML = `Chemistry`;
  c4.innerHTML = 3;
  p5.innerHTML = `Elementary Structured Programming`;
  c5.innerHTML = 3;
  p6.innerHTML = `Elementary Structured Programming lab`;
  lc1.innerHTML = 1.5;
  p7.innerHTML = `Introduction to Computer Systems`;
  lc2.innerHTML = 1.5;
  p8.innerHTML = `Physics Lab`;
  lc3.innerHTML = 0.75;
  p9.innerHTML = `English Language Sessional`;
  lc4.innerHTML = 1.5;
  localStorage.setItem("temp_active", "0");
  Delete_Row();
  double = 0;
  c = 0;
  cc1 = 0;
}
function one_2() {
  //1.2

  header.innerHTML = `1st Year 2nd Semester`;
  p1.innerHTML = `Mathematics-II`;
  c1.innerHTML = 3;
  p2.innerHTML = `Basic Mechanical Engineering`;
  c2.innerHTML = 3;
  p3.innerHTML = `Basic Electrical Engineering`;
  c3.innerHTML = 3;
  p4.innerHTML = `Discrete Mathematics`;
  c4.innerHTML = 3;
  p5.innerHTML = `Object Oriented Programming`;
  c5.innerHTML = 3;
  p6.innerHTML = `Software Development-I`;
  lc1.innerHTML = 1.5;
  p7.innerHTML = `Object Oriented Programming Lab`;
  lc2.innerHTML = 1.5;
  p8.innerHTML = `Engineering Drawing`;
  lc3.innerHTML = 0.75;
  p9.innerHTML = `Basic Electrical Engineering Lab`;
  lc4.innerHTML = 1.5;
  localStorage.setItem("temp_active", "0");
  Delete_Row();
  double = 0;
  c = 0;
  cc1 = 0;
}
function one_3() {
  //2.1

  header.innerHTML = `2nd Year 1st Semester`;
  p1.innerHTML = `Society, Ethics and Technology`;
  c1.innerHTML = 3;
  p2.innerHTML = `Mathematics-III`;
  c2.innerHTML = 3;
  p3.innerHTML = `Electronic Devices and Circuits`;
  c3.innerHTML = 3;
  p4.innerHTML = `Data Structures`;
  c4.innerHTML = 3;
  p5.innerHTML = `Digital Logic Design`;
  c5.innerHTML = 3;
  p6.innerHTML = `Software Development-II`;
  lc1.innerHTML = 0.75;
  p7.innerHTML = `Electronic Devices and Circuits Lab`;
  lc2.innerHTML = 1.5;
  p8.innerHTML = `Digital Logic Design Lab`;
  lc3.innerHTML = 1.5;
  p9.innerHTML = `Data Structures Lab`;
  lc4.innerHTML = 1.5;
  localStorage.setItem("temp_active", "0");
  Delete_Row();
  double = 0;
  c = 0;
  cc1 = 0;
}
function one_4() {
  //2.2

  header.innerHTML = `2nd Year 2nd Semester`;
  p1.innerHTML = `Mathematics- IV`;
  c1.innerHTML = 3;
  p2.innerHTML = `Numerical Methods`;
  c2.innerHTML = 3;
  p3.innerHTML = `Algorithms`;
  c3.innerHTML = 3;
  p4.innerHTML = `Data Communication`;
  c4.innerHTML = 3;
  p5.innerHTML = `Computer Architecture`;
  c5.innerHTML = 3;
  p6.innerHTML = `Software Development-III`;
  lc1.innerHTML = 0.75;
  p7.innerHTML = `Numerical Methods Lab`;
  lc2.innerHTML = 0.75;
  p8.innerHTML = `Algorithms Lab`;
  lc3.innerHTML = 1.5;
  p9.innerHTML = `Assembly Language Programming`;
  lc4.innerHTML = 1.5;
  localStorage.setItem("temp_active", "0");
  Delete_Row();
  double = 0;
  c = 0;
  cc1 = 0;
}
function one_5() {
  //3.1

  header.innerHTML = `3rd Year 2nd Semester`;
  p1.innerHTML = `Economics and Accounting`;
  c1.innerHTML = 3;
  p2.innerHTML = `Mathematical Analysis for Computer Science`;
  c2.innerHTML = 3;
  p3.innerHTML = `Database`;
  c3.innerHTML = 3;
  p4.innerHTML = `Digital System Design`;
  c4.innerHTML = 3;
  p5.innerHTML = `Microprocessors and Microcontrollers`;
  c5.innerHTML = 3;
  p6.innerHTML = `Microprocessors and Microcontrollers Lab`;
  lc1.innerHTML = 0.75;
  p7.innerHTML = `Database Lab`;
  lc2.innerHTML = 1.5;
  p8.innerHTML = `Software Development-IV`;
  lc3.innerHTML = 0.75;
  p9.innerHTML = `Digital System Design Lab`;
  lc4.innerHTML = 0.75;
  localStorage.setItem("temp_active", "0");
  Delete_Row();
  double = 0;
 
}
function one_6() {
  //3.2

  header.innerHTML = `3rd Year 2nd Semester`;
  p1.innerHTML = `Industrial Law and Safety Management`;
  c1.innerHTML = 3;
  p2.innerHTML = `Introduction to Computer Networks`;
  c2.innerHTML = 3;
  p3.innerHTML = `Introduction to Artificial Intelligence`;
  c3.innerHTML = 3;
  p4.innerHTML = `Operating System`;
  c4.innerHTML = 3;
  p5.innerHTML = `Information System Design and Software Engineering`;
  c5.innerHTML = 3;
  p6.innerHTML = `Software Development-V`;
  lc1.innerHTML = 0.75;
  p7.innerHTML = `Introduction to Computer Networks Lab`;
  lc2.innerHTML = 0.75;
  p8.innerHTML = `Introduction to Artificial Intelligence Lab`;
  lc3.innerHTML = 0.75;
  p9.innerHTML = `Operating System Lab`;
  lc4.innerHTML = 0.75;
  localStorage.setItem("temp_active", "6");
  c++;
  cc1 = 0;
  console.log(c);
  sem = 3.2;
  if (double == 0) {
    add();

    double = 1;
  } else {
    change();
  }
}

function one_7() {
  //4.1

  header.innerHTML = `YEAR-4, SEMESTER-1`;
  p1.innerHTML = `Industrial Management`;
  c1.innerHTML = 3;
  p2.innerHTML = `Project and Thesis-I`;
  c2.innerHTML = 3;
  p3.innerHTML = `Pattern Recognition and Machine Learning`;
  c3.innerHTML = 3;
  p4.innerHTML = `Formal Languages and Compilers`;
  c4.innerHTML = 3;
  p5.innerHTML = `Option-I`;
  c5.innerHTML = 3;
  p6.innerHTML = `Option-II`;
  lc1.innerHTML = 3;
  p7.innerHTML = `Formal Languages and Compilers Lab`;
  lc2.innerHTML = 0.75;
  p8.innerHTML = `Pattern Recognition and Machine Learning Lab`;
  lc3.innerHTML = 0.75;
  p9.innerHTML = `Option-I Lab`;
  lc4.innerHTML = 0.75;
  localStorage.setItem("temp_active", "7");
  cc1++;
  c = 0;
  console.log(cc1);
  sem = 4.1;
  if (double == 0) {
    add();
    console.log("open 41");
    double = 1;
  } else {
    change();
  }
}

function one_8() {        //4.2

    header.innerHTML = `YEAR-4, SEMESTER-2`;
    p1.innerHTML = `Computer Graphics`;
    c1.innerHTML = 3;
    p2.innerHTML = `Project and Thesis-II`;
    c2.innerHTML = 3;
    p3.innerHTML = `Option-III`;
    c3.innerHTML = 3;
    p4.innerHTML = `Option-IV`;
    c4.innerHTML = 3;
    p5.innerHTML = `Option-V`;
    c5.innerHTML = 3;
    p6.innerHTML = `Computer Graphics Lab`;
    lc1.innerHTML = 0.75;
    p7.innerHTML = `Option-III Lab`;
    lc2.innerHTML = 0.75;
    p8.innerHTML = `Option-IV Lab`;
    lc3.innerHTML = 0.75;
    p9.innerHTML = `None`;
    lc4.innerHTML = 0.0;
    Delete_Row();
    double = 0;
}

function change() {
  if (sem == 3.2) {
    one.innerHTML = `Information System Design and Software Engineering Lab`;
    two.innerHTML = `0.75`;
    sem = 0.0;
  } else if (sem == 4.1) {
    one.innerHTML = `Option-II Lab`;
    two.innerHTML = `0.75`;
    sem = 0.0;
  }
}



function add() {
  console.log("cvcv");
  console.log(sem);
  table = document.getElementById("main_table");
  row = table.insertRow(10);
  one = row.insertCell(0);

  two = row.insertCell(1);
  two.id = `lc5`;
  let three = row.insertCell(2);
  if (sem == 3.2) {
    one.innerHTML = `Information System Design and Software Engineering Lab`;
    two.innerHTML = `0.75`;
    sem = 0.0;
  } else if (sem == 4.1) {
    one.innerHTML = `Option-II Lab`;
    two.innerHTML = `0.75`;
    sem = 0.0;
  }
  three.innerHTML = `<Select style="border-spacing:2px; padding-top:6px; padding-bottom: 6px;" id='l5'name="department">
     <option value ="4.00">4.00</option>
     <option value ="3.75">3.75</option>
     <option value ="3.50">3.50</option>
     <option value ="3.25">3.25</option>
     <option value ="3.00">3.00</option>
     <option value ="2.75">2.75</option>
     <option value ="2.50">2.50</option>
     <option value ="2.25">2.25</option>
     <option value ="2.00">2.00</option>
     <option value ="0.00">0.00</option>
     </Select>`;
  delete_activator = 1;
}

function Delete_Row() {
  let table = document.getElementById("main_table");
  if (delete_activator == 1) {
    table.deleteRow(10);
    delete_activator = 0;
  }
}
