const btns = document.getElementsByClassName("headBtn");
const logBtn = btns[0];
const regBtn = btns[1];
const mainBtn = document.getElementsByClassName("headName")[0];
const mainURL = "https://fumetsunokami.github.io/JsPractice.github.io";
mainBtn.addEventListener("click", () => {
  window.location.href = mainURL;
});
logBtn.addEventListener("click", () => {
  window.location.href = `./login`;
});
regBtn.addEventListener("click", () => {
  window.location.href = `${mainURL}/registration`;
});
