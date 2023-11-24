btns = document.getElementsByClassName("headBtn");
logBtn = btns[0];
regBtn = btns[1];
currentURL = window.location.href;

logBtn.addEventListener("click", () => {
  window.location.href = `${currentURL}login`;
});
regBtn.addEventListener("click", () => {
  window.location.href = `${currentURL}reg`;
});
