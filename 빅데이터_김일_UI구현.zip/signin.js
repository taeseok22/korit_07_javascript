document.getElementById('login').onclick = function () {
  const id = document.getElementById('id').value.trim();
  const pw = document.getElementById('pw').value;

  const saveId = localStorage.getItem('username');
  const savePw = localStorage.getItem('password');

  if (id !== saveId) {
    alert('로그인 실패 : 아이디가 일치하지 않습니다.');
  } else if (pw !== savePw) {
    alert('로그인 실패 : 비밀번호가 일치하지 않습니다.');
  } else {
    alert('로그인 성공');
  }
};