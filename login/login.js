import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

export const loginEmailPassword = async () => {
  const loginEmail = document.getElementById("logEmail");
  const loginPassword = document.getElementById("pass");

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value,
    );
    alert("good job");
    labels[0].style.color = "grey";
    labels[1].style.color = "grey";
    loginEmail.value = "";
    loginPassword.value = "";
  } catch (error) {
    labels[0].style.color = "red";
    labels[1].style.color = "red";
    console.log(error);
  }
};

const subBtn = document.getElementsByClassName("logSub")[0];

subBtn.addEventListener("click", loginEmailPassword);

const registrBtn = document.getElementsByClassName("registerBtn")[0];
registrBtn.addEventListener("click", () => {
  window.location.href = `${mainURL}/registration`;
});
