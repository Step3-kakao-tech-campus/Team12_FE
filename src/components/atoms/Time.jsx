// Time.jsx
// Figma 내용의 오늘 ~시 ~분까지를 띄우기 위한 코드
// arrow function 으로 변경해 보았습니다!
// * ms 단위이기 때문에 1000을 곱해주어야 합니다

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
