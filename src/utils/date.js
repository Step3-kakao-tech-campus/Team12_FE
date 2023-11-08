// 년월일까지 필요한 경우의 코드
// ${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}

const getDeadlineDate = (timestamp) => {
  const time = timestamp;
  const myDate = new Date(time * 1000);
  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();

  hours = hours >= 10 ? hours : `0${hours}`;
  minutes = minutes >= 10 ? minutes : `0${minutes}`;

  // const deadline = `${myDate.getHours()}:${myDate.getMinutes()}까지`;
  const deadline = `${hours}:${minutes} 까지`;

  return deadline;
};

export default getDeadlineDate;
