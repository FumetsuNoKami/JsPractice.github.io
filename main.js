btns = document.getElementsByClassName("headBtn");
logBtn = btns[0];
regBtn = btns[1];
logBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:63342/JsPractice/reg/index.html";
});
currentURL = window.location.href;
alert("current URL: " + currentURL);
regBtn.addEventListener("click", () => {
  window.location.href = `${currentURL}/reg/index.html`;
});
