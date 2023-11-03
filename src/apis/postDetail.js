import instance from './index';

export const postDetail = (boardId) => {
  return instance.get(`/post/${boardId}`);
};

export default postDetail;
