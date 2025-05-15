const memberHong = {
  age: 10,
  name: "홍길동",
  role: "GUEST",
};
const memberKim = {
  age: 18,
  name: "김수한무",
  role: "MEMBER",
};
const memberPark = {
  age: 25,
  name: "박둘리",
  role: "ADMIN",
};

const originArr = [memberHong, memberKim, memberPark];
// 데이터 나는 18세 이상을 포함한 것들만 뽑을 거야
const result = originArr.filter((item, index) => {
  return item.role === "ADMIN";
  // return item.age >= 18;
});
//
console.log(result);

// 배열.map(function (요소(item), (인덱스)index, (원본배열)arr) { return 값 });
//
// 배열.filter(function (요소(item), (인덱스)index, (원본배열)arr) { return 값 });
//
