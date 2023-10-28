import { http, HttpResponse } from 'msw';
import REQUEST_LIST from './mockData';

const handlers = [
  http.get('/admin', () => {
    return HttpResponse.json(REQUEST_LIST);
  }),
];

export default handlers;
