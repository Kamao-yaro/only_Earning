
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

var loginBtn = document.getElementById("login");
var signupBtn = document.getElementById("signup");

var closeButtons = document.getElementsByClassName("close");

var mainContent = document.getElementById("mainContent");

loginBtn.onclick = function () {
    loginModal.style.display = "block";
    mainContent.classList.add("blur");
}

signupBtn.onclick = function () {
    signupModal.style.display = "block";
    mainContent.classList.add("blur");
}

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
        mainContent.classList.remove("blur");
    }
}

window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
        mainContent.classList.remove("blur");
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
        mainContent.classList.remove("blur");
    }
}


document.getElementById('button1').addEventListener('click', function () {
    location.reload();
});

document.getElementById('button2').addEventListener('click', function () {
    location.reload();
});

var disclaimerBtn = document.getElementById("disclaimer");
var disclaimerBox = document.querySelector(".disclaimer-box");

disclaimerBtn.onmouseover = function () {
    disclaimerBox.style.display = "block";
}

disclaimerBtn.onmouseout = function () {
    disclaimerBox.style.display = "none";
}