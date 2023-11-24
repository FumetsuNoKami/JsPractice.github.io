btns = document.getElementsByClassName("headBtn");
logBtn = btns[0];
regBtn = btns[1];
logBtn.addEventListener("click", () => {
  window.location.href = "/log/index.html";
});
regBtn.addEventListener("click", () => {
  window.location.href = "/reg/index.html";
});
