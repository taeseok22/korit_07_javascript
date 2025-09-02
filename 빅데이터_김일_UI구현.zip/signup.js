document.getElementById('signup').onclick = function () {
  const id = document.getElementById('id').value.trim();
  const pw = document.getElementById('pw').value;

  if (!id || !pw) {
    alert('아이디와 비밀번호를 입력해주세요.');
    return;
  }

  localStorage.setItem('username', id);
  localStorage.setItem('password', pw);

  alert('회원가입 성공! 로그인 페이지로 이동합니다.');
  window.location.href = 'signin.html';
};