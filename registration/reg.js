import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAAevTi8CAmEH9J8oAZtP-vG0RVLgT_8kw",
  authDomain: "jspractice-88c35.firebaseapp.com",
  projectId: "jspractice-88c35",
  storageBucket: "jspractice-88c35.appspot.com",
  messagingSenderId: "363490237825",
  appId: "1:363490237825:web:455d81cccecfa77f11dc80",
  measurementId: "G-4PCWG0N89G",
});
const auth = getAuth(firebaseApp);
const labels = document.getElementsByClassName("inpLabel");
const email = document.getElementById("regEmail");
const pass = document.getElementById("regPass");
const passConf = document.getElementById("passConf");
const createUser = async () => {
  const loginEmail = email.value;
  const loginPassword = pass.value;
  const passConfirm = passConf.value;
  if (loginPassword === passConfirm) {
    labels[1].style.color = "grey";
    labels[2].style.color = "grey";
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        email.value = "";
        pass.value = "";
        passConf.value = "";
        alert("good job");
      })
      .catch((error) => {
        labels[0].style.color = "red";
        labels[1].style.color = "red";
        labels[2].style.color = "red";
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  } else {
    labels[0].style.color = "grey";
    labels[1].style.color = "red";
    labels[2].style.color = "red";
  }
};

const subBtn = document.getElementsByClassName("logSub")[0];
subBtn.addEventListener("click", createUser);

const signInBtn = document.getElementsByClassName("signInBtn")[0];
signInBtn.addEventListener("click", () => {
  window.location.href = `${mainURL}/login`;
});
