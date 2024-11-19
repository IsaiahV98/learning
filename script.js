const palTextInput = document.getElementById("text-input");
const palCheckButton = document.getElementById("check-btn");
const palResult = document.getElementById("result");

function checkIfPal(possPal) {
  var possPalArray = possPal.value;
  var reversePalArray = possPalArray.split("").reverse().join("");

  if (possPalArray == reversePalArray) {
    palResult.innerText = `${possPalArray} is a palindrome`;
  } else {
    palResult.innerText = `${possPalArray} is not a palindrome`;
  }
}

palCheckButton.addEventListener("click", function () {
  checkIfPal(palTextInput);
});
