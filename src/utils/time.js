const Time = (timestamp) => {
  const time = timestamp;
  const myDate = new Date(time * 1000);
  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();

  hours = hours >= 10 ? hours : `0${hours}`;
  minutes = minutes >= 10 ? minutes : `0${minutes}`;

  const deadline = `오늘 ${hours}시 ${minutes}분 까지`;

  return deadline;
};

export default Time;
