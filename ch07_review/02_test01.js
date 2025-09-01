// 폼 요소 가져오기
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// 로그인 로직
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
  
// 회원가입 로직
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

  // 회원가입 성공 처리
  message.style.color = "green";
  message.textContent = "회원가입 성공!";
  // 여기에 서버 저장 등 백엔드 연동 추가 가능
});

// 폼 전환
showSignup.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

showLogin.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});
