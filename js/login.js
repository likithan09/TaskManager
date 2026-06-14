import { auth } from "../firebase/firebase-config.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            alert("Login Successful");

            window.location.href = "index.html";

        })
       .catch((error) => {
    console.log(error);
    alert(error.message);
});

        });