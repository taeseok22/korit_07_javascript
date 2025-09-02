const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("loginMessage");

  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "로그인 성공!";
  } else {
    message.style.color = "red";
    message.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
  }
});
  

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupPasswordConfirm").value;
  const message = document.getElementById("signupMessage");

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "비밀번호가 일치하지 않습니다.";
    return;
  }

  message.style.color = "green";
  message.textContent = "회원가입 성공!";

});


showSignup.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

showLogin.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});
