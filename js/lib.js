// 데이터 서버에 자료를 호출함.

function getDate(api = "posts") {
  // 1. xhr 객체 한개 만듦
  const xhr = new XMLHttpRequest();
  // 2. 주소를 연결함
  xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
  // 3. 웹브라우저로 요청을 합니다.
  xhr.send();
  // 4. 요청 이후 응답이 오기를 기다린다.
  xhr.onload = function () {
    console.log("요청이 되어졌을 때 백엔드 회신정보 : ", xhr);
    if (xhr.status === 200) {
      console.log("정상적인 Response 됨");
    } else if (xhr.status === 404) {
      console.log("주소가 잘못되었네요.");
    } else if (xhr.status === 505) {
      console.log("서버에 오류입니다. 잠시 후 시도해 주세요.");
    }
  };
}
// 합수 사용
getDate();
getDate("pasts");
getDate("comments");
getDate("albums");
getDate("photos");
getDate("photos");
getDate("todos");
getDate("users");
