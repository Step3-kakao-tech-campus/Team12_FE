import { http, HttpResponse } from 'msw';
import { REQUEST_ARTICLE_LIST } from '@/mocks/data/articleListData';

const articleListHandlers = [
  http.get('/articles?offset=&limit=10', () => {
    return HttpResponse.json(REQUEST_ARTICLE_LIST);
  }),
];

export default articleListHandlers;
