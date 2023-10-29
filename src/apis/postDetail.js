import instance from './index';

export const postDetail = (boardId = '') => {
  return instance.get(`/articles/before/${boardId}`);
};

export default postDetail;
