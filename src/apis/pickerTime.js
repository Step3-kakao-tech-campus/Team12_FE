import instance from './index';

const pickerTime = (data) => {
  const { arriveTime, boardId } = data;
  return instance.post('/articles/agree', {
    arriveTime,
    boardId,
  });
};

export default pickerTime;
