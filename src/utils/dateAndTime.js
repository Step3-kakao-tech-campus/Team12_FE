const dateAndTime = (data) => {
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

export default dateAndTime;
