// 년월일까지 필요한 경우의 코드
// ${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}

export const getDeadlineDate = (timestamp) => {
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

export const dateAndTime = (data) => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  month = month.toString().padStart(2, '0');
  date = date.toString().padStart(2, '0');

  const hour = data.hour.padStart(2, '0');
  const minute = data.minute.padStart(2, '0');

  const finishedAt = `${year}-${month}-${date} ${hour}:${minute}`;
  return finishedAt;
};

export const time = (timestamp) => {
  const getTime = timestamp;
  const myDate = new Date(getTime * 1000);
  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();

  hours = hours >= 10 ? hours : `0${hours}`;
  minutes = minutes >= 10 ? minutes : `0${minutes}`;

  const deadline = `오늘 ${hours}시 ${minutes}분 까지`;

  return deadline;
};
