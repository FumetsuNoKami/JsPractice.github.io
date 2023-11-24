btns = document.getElementsByClassName("headBtn");
logBtn = btns[0];
regBtn = btns[1];
currentURL = window.location.href;

console.log(!currentURL.includes("log"));

if (!currentURL.includes("log")) {
  if (currentURL.includes("reg")) {
    currentURL = currentURL.substring(
      0,
      currentURL.lastIndexOf(".", currentURL.length) + 3,
    );
  }
  logBtn.addEventListener("click", () => {
    window.location.href = `${currentURL}/log`;
  });
}
console.log(!currentURL.includes("reg"));
if (!currentURL.includes("reg")) {
  if (currentURL.includes("log")) {
    currentURL = currentURL.substring(
      0,
      currentURL.lastIndexOf(".", currentURL.length) + 3,
    );
  }
  regBtn.addEventListener("click", () => {
    window.location.href = `${currentURL}/reg`;
  });
}
