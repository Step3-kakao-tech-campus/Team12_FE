import { instance } from './index';

// 공고상세페이지 받아오기 (피커, 작성자용)
// 공고상세페이지 받아오는 것이 통합됨(매칭전에는 피커정보가 없고 매칭후에 생김)
/* eslint-disable-next-line */
export const getPostDetail = (boardId) => {
  return instance.get(`/articles/${boardId}`);
};

// 매칭하기 (피커용)
/* eslint-disable-next-line */
export const postPickerTime = (data) => {
  const { arrivalTime, boardId } = data;
  return instance.post('/articles/agree', { arrivalTime, boardId });
};

// 공고글 삭제

// 공고글 수정
