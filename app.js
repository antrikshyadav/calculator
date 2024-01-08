let display = document.querySelector(".display");

function displayto(value) {
  display.value += value;
}
function deletee() {
  display.value = " ";
}
function equal() {
  display.value = eval(display.value);
}
function deletelast() {
  display.value = display.value.substring(0, display.value.length - 1);
}
