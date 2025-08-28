// alert()
// window.alert('이것은 alert창입니다.');

// confirm()
// confirm('정말 삭제하시겠습니까?');

// prompt()
// prompt('삭제하신다면 delete my page 를 입력하세요.');

// open()
// open('https://www.naver.com');

// seTimeout() / clearTimeout()
let myExec;

function myFunction() {
  myExec = setTimeout(
    function() {console.log('5초후 실행되었습니다.');}
    , 5000);
}

function myStopFunction() {
  console.log('취소합니다.');
  clearTimeout(myExec);
}

// 보통 onclick에 사용한다.

// 함수 호출 
myFunction();