import { instance } from './index';

const writePost = (data) => {
  const { store, beverage, destination, tip, request, finishedAt } = data;
  return instance.post('/articles/write', {
    store,
    beverage,
    destination,
    tip,
    request,
    finishedAt,
  });
};

export default writePost;
