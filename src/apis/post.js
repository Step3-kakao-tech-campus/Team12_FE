// eslint-disable-next-line import/no-named-as-default
import { instance } from './index';

// 무한스크롤 API
// 공고 목록 요청 예시 /articles?offset=&limit=10
// offset : 아무것도 넣지 않아야 최신 순서로의 글을 보내줌
// 응답으로 오는 last가 true이면 이후의 게시글이 추가로 없다는 뜻
// 응답으로 오는 last가 false이면 offset을 마지막으로 온 boardId로 수정해서 request
// offset : 몇 번째 글부터 보여주는지(boardId가 낮을 수록 오래된 공고글)
// offset : 아무것도 넣지 않을 경우 최신 공고글을 보내줌
// limit  : 글을 몇 개만큼 요청할 것인지
// eslint-disable-next-line import/prefer-default-export
export const getPosts = (offset = '') => {
  return instance.get(`/articles?offset=${offset}&limit=10`);
};

// boardId로 공고 받아오기
export const getPostById = (boardId) => {
  if (!boardId) {
    throw Error('id가 필요합니다.');
  }
  /* eslint-disable-next-line */
  return instance.get('/post/' + boardId);
};
