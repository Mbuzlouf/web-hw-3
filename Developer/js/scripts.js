const languages = ["HTML", "CSS", "PHP", "Swift", "Java", "JavaScript"];
const needed_languages = 6;
console.log("مرحباً بك في برنامج توظيف المبرمجين");

let name = prompt("ما اسمك؟");
let age = parseInt(prompt("كم عمرك"));
let exper = parseInt(prompt("كم عدد سنوات الخبرة لديك؟"));

console.log("لغات البرمجة : ");
// console.log("1." + languages[0]);
// console.log("2." + languages[1]);
// console.log("3." + languages[2]);
// console.log("4." + languages[3]);
// console.log("5." + languages[4]);
// console.log("6." + languages[5]);

for (let i = 1; i <= languages.length; i++) {
  console.log(i + ". " + languages[i - 1]);
}

let skill = prompt("اختر اللغة");
let skill2 = prompt("اختر لغة أخرى");

if (
  age > 25 &&
  age < 40 &&
  exper > 3 &&
  (skill == needed_languages || skill2 == needed_languages)
) {
  console.log("مقبول");
} else {
  console.log("مرفوض");
}
// --------------------------------------------------------------------
// // ----------------------------------------------

function logger(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
  }
}

function toCel(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    result_array.push(parseInt((temperatures[i] - 32) * (5 / 9)));
  }
  return result_array;
}

function hottestDays(temperatures, min_value) {
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > min_value) {
      hot.push(temperatures[i]);
    }
  }
  return hot;
}

let feh_temp_array = [32, 70, 99, 106];
let threshold = 70;
let hot = [];
let result_array = [];

function logHottestDays(input_array, min_value) {
  logger(toCel(hottestDays(input_array, min_value)));
}

logHottestDays(feh_temp_array, threshold);

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

function marks() {
  allmarks = 0;
  field1 = document.getElementById("field1").value.split(",");
  for (i = 0; i < field1.length; i++) {
    allmarks += parseInt(field1[i]);
  }
  document.getElementById("numeric").innerHTML = allmarks;

  if (allmarks > 90) {
    document.getElementById("letter").innerHTML = "A";
    document.getElementById("gifs").innerHTML = "<img src='gifs/A.gif' />";
  } else if (allmarks >= 80) {
    document.getElementById("letter").innerHTML = "B";
    document.getElementById("gifs").innerHTML = "<img src='gifs/B.gif' />";
  } else if (allmarks >= 70) {
    document.getElementById("letter").innerHTML = "C";
    document.getElementById("gifs").innerHTML = "<img src='gifs/C.gif' />";
  } else if (allmarks >= 60) {
    document.getElementById("letter").innerHTML = "D";
    document.getElementById("gifs").innerHTML = "<img src='gifs/D.gif' />";
  } else if (allmarks >= 0 && allmarks < 60) {
    document.getElementById("letter").innerHTML = "F";
    document.getElementById("gifs").innerHTML = "<img src='gifs/F.gif' />";
  } else {
    document.getElementById("letter").innerHTML = "Something went wrong...";
  }
}
