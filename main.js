const btns = document.getElementsByClassName("headBtn");
const logBtn = btns[0];
const regBtn = btns[1];
const mainBtn = document.getElementsByClassName("headName")[0];
const currentURL = window.location.href;
let nextURL = currentURL;
console.log(!currentURL.includes("log"));

mainBtn.addEventListener("click", () => {
  window.location.href = currentURL.substring(
    0,
    currentURL.lastIndexOf(".", currentURL.length) + 3,
  );
});

if (!currentURL.includes("log")) {
  if (currentURL.includes("reg")) {
    nextURL = currentURL.substring(
      0,
      currentURL.lastIndexOf(".", currentURL.length) + 3,
    );
  }
  logBtn.addEventListener("click", () => {
    window.location.href = `${nextURL}/log`;
  });
}
console.log(!currentURL.includes("reg"));
if (!currentURL.includes("reg")) {
  if (currentURL.includes("log")) {
    nextURL = currentURL.substring(
      0,
      currentURL.lastIndexOf(".", currentURL.length) + 3,
    );
  }
  regBtn.addEventListener("click", () => {
    window.location.href = `${nextURL}/reg`;
  });
}
