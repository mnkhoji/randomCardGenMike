// first create 2 arrays; array with suits and array with numbers
// create a random nmbr gen 1-4 (clubs,spades,diamonds and hearts)
// create a random nmbr gen 0-12(2, 3, 4, 5, 6, 7, 8, 9, 10, K, Q, J, A)
let suitsArr = ["♦", "♥", "♠", "♣"];
let numberArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

function randomCard(arr1, arr2) {
  let suitsIndx = Math.floor(Math.random() * arr1.length);
  let numberIndx = Math.floor(Math.random() * arr2.length);
  document.getElementById("suitsUp").innerText = suitsArr[suitsIndx];
  document.getElementById("suitsDown").innerText = suitsArr[suitsIndx];
  document.getElementById("randNumber").innerText = numberArr[numberIndx];
}

randomCard(suitsArr, numberArr);


let myInterval 
function startgenerating(){
  myInterval = setInterval(() => {
    randomCard(suitsArr, numberArr)
  }, 10000)
}
document.getElementById("butt2").addEventListener('click',startgenerating)

function stopgenerating(){
  clearInterval(myInterval)
}
document.getElementById("butt3").addEventListener('click',stopgenerating)