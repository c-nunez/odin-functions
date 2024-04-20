function genRanNum() {
  return Math.round(Math.random() * 100);
}

function sum(num1, num2) {
  return num1 + num2;
}
function product(num1, num2) {
  return num1 * num2;
}

function updateSum() {
  let num1 = genRanNum();
  let num2 = genRanNum();
  document.getElementById("add").innerHTML = `${num1} + ${num2} = ${sum(
    num1,
    num2
  )} `;
  document.getElementById(
    "multiply"
  ).innerHTML = `${num1} x ${num2} = ${product(num1, num2)} `;
}

function findLast() {
  let sentence = document.getElementById("phrase").innerHTML;
  return sentence.at(-1);
}

function lastLetter() {
  document.getElementById("last").innerHTML = `${findLast()}`;
}

function capWords() {
  let btn = document.getElementById("btnCheck");
  btn.addEventListener("click", function () {
    let inputText = document.getElementById("myText").value;
    let words = inputText.split(" ");
    let firstWord =
      words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    let restWords = words.slice(1).map((word) => word.toLowerCase());
    let capitalizedText = firstWord + " " + restWords.join(" ");
    document.getElementById("firstLetter").innerHTML = capitalizedText;
  });
}

setInterval(updateSum, 5000);
capWords();
lastLetter();
updateSum();
