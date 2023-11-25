const signInBtn = document.getElementsByClassName("signInBtn")[0];
signInBtn.addEventListener("click", () => {
  window.location.href = `${mainURL}/log`;
});
console.log(signInBtn);
