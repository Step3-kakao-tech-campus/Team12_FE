import { http, HttpResponse } from 'msw';
import { REQUEST_POSTLIST } from '../data/postListData';

const postListHandlers = [
  http.get('/articles?offset=&limit=10', () => {
    return HttpResponse.json(REQUEST_POSTLIST);
  }),
];

export default postListHandlers;
