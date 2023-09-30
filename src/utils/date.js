// 년월일까지 필요한 경우의 코드
// ${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}

const date = (timestamp) => {
  const time = timestamp;
  const myDate = new Date(time * 1000);
  const deadline = `${myDate.getHours()}:${myDate.getMinutes()}까지`;

  return deadline;
};

export default date;
