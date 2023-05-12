//selectors
const btnAdd = document.querySelector("#btn-add");
const message = document.querySelector("#container-message");
const btnContinue = document.querySelector("#btn-continue");

btnAdd.addEventListener("click", () => {
  message.style.display = "flex";
});
btnContinue.addEventListener("click", () => {
  message.style.display = "none";
});
