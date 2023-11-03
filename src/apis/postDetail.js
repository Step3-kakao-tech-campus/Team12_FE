import instance from './index';

// 공고상세페이지 받아오기 (피커, 작성자용)
/* eslint-disable-next-line */
export const postDetail = (boardId) => {
  return instance.get(`/post/${boardId}`);
};

// 매칭후 공고상세페이지 받아오기(피커정보있음) (작성자용)
/* eslint-disable-next-line */
export const postDetailWriter = (boardId) => {
  return instance.get(`/articles/after/${boardId}`);
};

// 매칭하기 (피커용)
/* eslint-disable-next-line */
export const postDetailPicker = (data) => {
  const { arrivalTime, boardId } = data;
  return instance.post('/articles/agree', { arrivalTime, boardId });
};

// 공고글 삭제

// 공고글 수정
