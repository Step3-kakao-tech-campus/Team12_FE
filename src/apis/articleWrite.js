import { instance } from './index';

const writeArticle = (data) => {
  const { shopName, beverages, destination, tip, request, finishedAt } = data;
  return instance.post('/articles/write', {
    shopName,
    beverages,
    destination,
    tip,
    request,
    finishedAt,
  });
};

export default writeArticle;
